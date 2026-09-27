#!/bin/bash
#
# Bilermen installer for Ubuntu 22.04.
#
# 1. Installs BigBlueButton 3.0 with the official bbb-install.sh (skipped if it
#    is already installed).
# 2. Builds the Bilermen HTML5 client from this repository and deploys it over
#    the stock client. Server configuration (settings.yml, bbb-web, etc.) is not
#    touched; branding is applied through /etc/bigbluebutton/bbb-html5.yml.
#
# Usage:
#   sudo bash install.sh -s meet.example.tm -e admin@example.tm [-g]
#   sudo bash install.sh -u        # update: rebuild the client from the latest commit
#
# Options:
#   -s HOST    Public hostname of the server (DNS must already point to it)
#   -e EMAIL   E-mail for the Let's Encrypt certificate
#   -g         Also install Greenlight (web portal to create rooms)
#   -u         Update only: pull the latest Bilermen code and redeploy the client
#   -r URL     Git repository (default: https://github.com/thebashimovv/bigbluebutton.git)
#   -b BRANCH  Git branch (default: bilermen)

set -euo pipefail

REPO_URL="https://github.com/thebashimovv/bigbluebutton.git"
BRANCH="bilermen"
SRC_DIR="/opt/bilermen/src"
CLIENT_DIR="/usr/share/bigbluebutton/html5-client"
BACKUP_DIR="/usr/share/bigbluebutton/html5-client.orig"
HTML5_OVERRIDE="/etc/bigbluebutton/bbb-html5.yml"
BBB_INSTALL_URL="https://raw.githubusercontent.com/bigbluebutton/bbb-install/v3.0.x-release/bbb-install.sh"

HOST=""
EMAIL=""
GREENLIGHT=""
UPDATE_ONLY=false

say() { echo -e "\n\033[1;32m[bilermen]\033[0m $*"; }
die() { echo -e "\n\033[1;31m[bilermen] ERROR:\033[0m $*" >&2; exit 1; }

while getopts "s:e:gur:b:h" opt; do
  case "$opt" in
    s) HOST="$OPTARG" ;;
    e) EMAIL="$OPTARG" ;;
    g) GREENLIGHT="-g" ;;
    u) UPDATE_ONLY=true ;;
    r) REPO_URL="$OPTARG" ;;
    b) BRANCH="$OPTARG" ;;
    h|*) sed -n '2,25p' "$0"; exit 0 ;;
  esac
done

[ "$(id -u)" -eq 0 ] || die "Run as root: sudo bash $0 ..."
grep -q 'VERSION_ID="22.04"' /etc/os-release || die "Ubuntu 22.04 is required."

# --- 1. BigBlueButton ---------------------------------------------------------
if ! $UPDATE_ONLY; then
  if dpkg -s bbb-html5 >/dev/null 2>&1; then
    say "BigBlueButton is already installed, skipping bbb-install."
  else
    [ -n "$HOST" ] && [ -n "$EMAIL" ] || die "First install needs -s HOST and -e EMAIL."
    say "Installing BigBlueButton 3.0 for $HOST (this takes 20-30 minutes)..."
    # bbb-html5 must be upgradable during the base install
    apt-mark unhold bbb-html5 >/dev/null 2>&1 || true
    wget -qO- "$BBB_INSTALL_URL" | bash -s -- -v jammy-300 -s "$HOST" -e "$EMAIL" $GREENLIGHT
  fi
fi

dpkg -s bbb-html5 >/dev/null 2>&1 || die "bbb-html5 is not installed; BigBlueButton setup failed."

# --- 2. Source code -----------------------------------------------------------
apt-get install -y git rsync >/dev/null
command -v node >/dev/null || die "Node.js not found (it is normally installed with BigBlueButton)."
say "Node.js $(node -v), npm $(npm -v)"

if [ -d "$SRC_DIR/.git" ]; then
  say "Updating source in $SRC_DIR ($BRANCH)..."
  git -C "$SRC_DIR" fetch --depth 1 origin "$BRANCH"
  git -C "$SRC_DIR" checkout -q -B "$BRANCH" FETCH_HEAD
else
  say "Cloning $REPO_URL ($BRANCH) into $SRC_DIR..."
  mkdir -p "$(dirname "$SRC_DIR")"
  git clone --depth 1 --branch "$BRANCH" "$REPO_URL" "$SRC_DIR"
fi
COMMIT="$(git -C "$SRC_DIR" rev-parse --short HEAD)"

# Warn when the server packages are a different release than the client source.
SERVER_VERSION="$(dpkg-query -W -f='${Version}' bbb-html5 | sed -E 's/^[0-9]+://; s/-.*//')"
SOURCE_VERSION="$(sed -n 's/^BIGBLUEBUTTON_RELEASE=//p' "$SRC_DIR/bigbluebutton-config/bigbluebutton-release")"
if [ "$SERVER_VERSION" != "$SOURCE_VERSION" ]; then
  echo "WARNING: server has BigBlueButton $SERVER_VERSION but the Bilermen client is based on $SOURCE_VERSION."
  echo "         Rebase the '$BRANCH' branch on v$SERVER_VERSION if the client fails to join meetings."
fi

# --- 3. Build -----------------------------------------------------------------
say "Building the HTML5 client (commit $COMMIT)..."
cd "$SRC_DIR/bigbluebutton-html5"
BUILD="$(date +%s)"
CI=true npm ci --no-audit --no-fund
rm -rf dist
DISABLE_ESLINT_PLUGIN=true npm run build-safari
npm run build

# Give Safari bundles the same hash as the main bundle (same as the official package build).
(
  cd dist
  HASH="$(ls | grep -Eo 'bundle\.[a-f0-9]{20}\.js' | head -n 1 | grep -Eo '[a-f0-9]{20}' || true)"
  if [ -n "$HASH" ]; then
    shopt -s nullglob
    for FILE in *.safari.js *.safari.js.map; do
      [[ "$FILE" == *".$HASH."* ]] && continue
      mv -- "$FILE" "${FILE%%.safari.js*}.${HASH}.safari.js${FILE#*.safari.js}"
    done
  fi
)
sed -i "s/?v=VERSION/?v=$BUILD/g" dist/index.html dist/stylesheets/fonts.css
# Precompressed copies still reference ?v=VERSION; drop them so nginx serves the updated files.
rm -f dist/index.html.gz dist/stylesheets/fonts.css.gz

# --- 4. Deploy ----------------------------------------------------------------
if [ ! -d "$BACKUP_DIR" ]; then
  say "Backing up the stock client to $BACKUP_DIR"
  cp -a "$CLIENT_DIR" "$BACKUP_DIR"
fi

say "Deploying the client to $CLIENT_DIR"
# private/ holds the server-side settings.yml installed by the bbb-html5 package; keep it.
rsync -a --delete --exclude 'private/' dist/ "$CLIENT_DIR/"

say "Applying Bilermen branding to $HTML5_OVERRIDE"
touch "$HTML5_OVERRIDE"
if command -v yq >/dev/null; then
  TMP="$(mktemp)"
  yq eval-all '. as $item ireduce ({}; . * $item)' "$HTML5_OVERRIDE" "$SRC_DIR/bilermen/bbb-html5.yml" > "$TMP"
  cat "$TMP" > "$HTML5_OVERRIDE" && rm -f "$TMP"
else
  [ -s "$HTML5_OVERRIDE" ] && die "yq not found and $HTML5_OVERRIDE is not empty; merge $SRC_DIR/bilermen/bbb-html5.yml by hand."
  cp "$SRC_DIR/bilermen/bbb-html5.yml" "$HTML5_OVERRIDE"
fi

# Stop apt upgrades from replacing the Bilermen client with the stock one.
apt-mark hold bbb-html5 >/dev/null

say "Restarting BigBlueButton..."
bbb-conf --restart

say "Done. Bilermen client $COMMIT is live. Refresh the browser with Ctrl+F5."
echo "Rollback to the stock client:"
echo "  sudo rsync -a --delete $BACKUP_DIR/ $CLIENT_DIR/ && sudo apt-mark unhold bbb-html5"
