const colorWhite = 'var(--color-white, #FFF)';
const colorOffWhite = 'var(--color-off-white, #F4F7FA)';

const colorBlack = 'var(--color-black, #000000)';

const colorGray = 'var(--color-gray, #34506A)';
const colorGrayDark = 'var(--color-gray-dark, #0B2B45)';
const colorGrayLight = 'var(--color-gray-light, #5B7389)';
const colorGrayLighter = 'var(--color-gray-lighter, #A5B6C5)';
const colorGrayLightest = 'var(--color-gray-lightest, #D8E2EA)';
const colorBorder = 'var(--color-border, #8FA3B5)';

const colorBlueLight = 'var(--color-blue-light, #3A9BD0)';
const colorBlueLighter = 'var(--color-blue-lighter, #9CCBE6)';
const colorBlueLightest = 'var(--color-blue-lightest, #E6F1F8)';
const colorBlueLightestChannel = '230 241 248';
const colorBlueLighterChannel = '156 203 230';

const colorTransparent = 'var(--color-transparent, #ff000000)';

const colorUserModerator = 'var(--color-user-moderator, #013F6E)';

const colorPrimary = 'var(--color-primary, #0174AA)';
const colorDanger = 'var(--color-danger, #D63439)';
const colorDangerDark = 'var(--color-danger-dark, #AE2429)';
const colorSuccess = 'var(--color-success, #01875C)';
const colorWarning = 'var(--color-warning, #B45309)';
const colorOffline = `var(--color-offline, ${colorGrayLight})`;
const colorMuted = 'var(--color-muted, #526A80)';
const colorMutedBackground = 'var(--color-muted-background, #EEF3F7)';

const colorBackground = `var(--color-background, ${colorGrayDark})`;
const colorOverlay = 'var(--color-overlay, rgba(7, 19, 31, 0.7))';

const userListBg = `var(--user-list-bg, ${colorOffWhite})`;
const userListText = `var(--user-list-text, ${colorGray})`;
const unreadMessagesBg = `var(--unread-messages-bg, ${colorDanger})`;
const colorGrayLabel = `var(--color-gray-label, ${colorGray})`;
const colorText = `var(--color-text, ${colorGray})`;
const colorLink = `var(--color-link, ${colorPrimary})`;

const listItemBgHover = 'var(--list-item-bg-hover, #E6EFF6)';
const colorTipBg = 'var(--color-tip-bg, #0B2B45)';
const itemFocusBorder = `var(--item-focus-border, ${colorPrimary})`;

const btnDefaultColor = `var(--btn-default-color, ${colorGray})`;
const btnDefaultBg = `var(--btn-default-bg, ${colorWhite})`;
const btnDefaultBorder = `var(--btn-default-border, ${colorWhite})`;

const btnDefaultGhostColor = `var(--btn-default-color, ${colorWhite})`;
const btnDefaultGhostBg = 'var(--btn-default-bg, rgba(255, 255, 255, 0.1))'; // colorWhite, 10%
const btnDefaultGhostBorder = 'var(--btn-default-border, rgba(255, 255, 255, 0.5))'; // colorWhite, 50%
const btnDefaultGhostActiveBg = 'var(--btn-default-active-bg, rgba(255, 255, 255, 0.2))'; // colorWhite, 20%

const btnPrimaryBorder = 'var(--btn-primary-border, rgba(1, 116, 170, 0.5))'; // colorPrimary, 50%
const btnPrimaryColor = `var(--btn-primary-color, ${colorWhite})`;
const btnPrimaryBg = `var(--btn-primary-bg, ${colorPrimary})`;
const btnPrimaryHoverBg = 'var(--btn-primary-hover-bg, #01628F)';
const btnPrimaryActiveBg = 'var(--btn-primary-active-bg, #015379)';

const btnSuccessBorder = `var(--btn-success-border, ${colorSuccess})`;
const btnSuccessColor = `var(--btn-success-color, ${colorWhite})`;
const btnSuccessBg = `var(--btn-success-bg, ${colorSuccess})`;

const btnWarningBorder = `var(--btn-warning-border, ${colorWarning})`;
const btnWarningColor = `var(--btn-warning-color, ${colorWhite})`;
const btnWarningBg = `var(--btn-warning-bg, ${colorWarning})`;

const btnDangerBorder = `var(--btn-danger-border, ${colorDanger})`;
const btnDangerColor = `var(--btn-danger-color, ${colorWhite})`;
const btnDangerBg = `var(--btn-danger-bg, ${colorDanger})`;
const btnDangerBgHover = 'var(--btn-danger-bg-hover, #AE2429)';

const btnDarkBorder = `var(--btn-dark-border, ${colorDanger})`;
const btnDarkColor = `var(--btn-dark-color, ${colorWhite})`;
const btnDarkBg = `var(--btn-dark-bg, ${colorGrayDark})`;

const btnOfflineBorder = `var(--btn-offline-border, ${colorOffline})`;
const btnOfflineColor = `var(--btn-offline-color, ${colorWhite})`;
const btnOfflineBg = `var(--btn-offline-bg, ${colorOffline})`;

const btnMutedBorder = `var(--btn-muted-border, ${colorMutedBackground})`;
const btnMutedColor = `var(--btn-muted-color, ${colorMuted})`;
const btnMutedBg = `var(--btn-muted-bg, ${colorMutedBackground})`;

const toolbarButtonColor = `var(--toolbar-button-color, ${btnDefaultColor})`;
const toolbarButtonColorDisabled = `var(--toolbar-button-color, ${colorGrayLight})`;
const userThumbnailBorder = `var(--user-thumbnail-border, ${colorBorder})`;
const loaderBg = `var(--loader-bg, ${colorGrayDark})`;
const loaderBullet = `var(--loader-bullet, ${colorWhite})`;

const systemMessageBackgroundColor = 'var(--system-message-background-color, #F4F7FA)';
const systemMessageBorderColor = `var(--system-message-border-color, ${colorBorder})`;
const systemMessageFontColor = `var(--system-message-font-color, ${colorGrayDark})`;
const highlightedMessageBackgroundColor = 'var(--system-message-background-color, #fef9f1)';
const highlightedMessageBorderColor = `var(--highlighted-message-border-color, ${colorBorder})`;
const emphasizedMessageBackgroundColor = 'var(--emphasized-message-background-color, #E6F1F8)';
const colorHeading = `var(--color-heading, ${colorGrayDark})`;
const palettePlaceholderText = 'var(--palette-placeholder-text, #787675)';
const pollAnnotationGray = 'var(--poll-annotation-gray, #333333)';

const toolbarButtonBorderColor = `var(--toolbar-button-border-color, ${colorBorder})`;
const toolbarListColor = `var(--toolbar-list-color, ${colorGray})`;
const toolbarButtonBg = `var(--toolbar-button-bg, ${btnDefaultBg})`;
const toolbarListBg = 'var(--toolbar-list-bg, #DDD)';
const toolbarListBgFocus = 'var(--toolbar-list-bg-focus, #C6C6C6)';
const colorContentBackground = 'var(--color-content-background, #0F2438)';

const dropdownBg = `var(--dropdown-bg, ${colorWhite})`;

const pollStatsBorderColor = `var(--poll-stats-border-color, ${colorBorder})`;
const pollBlue = `var(--poll-blue, ${colorPrimary})`;

const toastDefaultColor = `var(--toast-default-color, ${colorWhite})`;
const toastDefaultBg = `var(--toast-default-bg, ${colorGray})`;

const toastInfoColor = `var(--toast-info-color, ${colorWhite})`;
const toastInfoBg = `var(--toast-info-bg, ${colorPrimary})`;

const toastSuccessColor = `var(--toast-success-color, ${colorWhite})`;
const toastSuccessBg = `var(--toast-success-bg, ${colorSuccess})`;

const toastErrorColor = `var(--toast-error-color, ${colorWhite})`;
const toastErrorBg = `var(--toast-error-bg, ${colorDanger})`;

const webcamBackgroundColor = 'var(--webcam-background-color, #0B2B45)';
const webcamPlaceholderBorder = 'var(--webcam-placeholder-border, rgba(255, 255, 255, 0.5))'; // colorWhite, 50%

// Bilermen brand green (01A771) at 15% opacity for the talking indicator background
const webcamTalkingBackgroundColor = 'var(--webcam-talking-background-color, rgba(1, 167, 113, 0.15))';

const toastWarningColor = `var(--toast-warning-color, ${colorWhite})`;
const toastWarningBg = `var(--toast-warning-bg, ${colorWarning})`;

const SegmentedButtonRingOffsetShadow = 'var(--ring-offset-shadow, 0 0 #0000)';
const SegmentedButtonRingShadow = 'var(--ring-shadow, 0 0 #0000)';
const SegmentedButtonBoxShadowSm = 'var(--shadow, 0 1px 2px 0 rgba(0, 0, 0, 0.05))';
const slate900 = 'var(--slate-900, #111827)';
const darkCyanLime = 'var(--dark-cyan-lime, #16A34A)';

const colorInfoBoxQuizText = 'var(--color-info-box-quiz-text, #15803D)';
const colorInfoBoxQuizBg = 'var(--color-info-box-quiz-bg, #F0FDF4)';
const colorInfoBoxQuizBorder = `var(--color-info-box-quiz-border, ${colorSuccess})`;

const colorSelectedCorrectAnswerText = 'var(--color-selected-correct-answer-text, #A16207)';
const colorSelectedCorrectAnswerBg = 'var(--color-selected-correct-answer-bg, #FEF9C3)';

const colorSelectedCorrectAnswerTextActive = 'var(--color-selected-correct-answer-text-active, #15803D)';
const colorSelectedCorrectAnswerBgActive = 'var(--color-selected-correct-answer-bg-active, #DCFCE7)';

const colorGreen600 = 'var(--color-green-600, #16A34A)';
const colorGreen100 = 'var(--color-green-100, #DCFCE7)';

export {
  colorWhite,
  colorOffWhite,
  colorBlack,
  colorGray,
  colorGrayDark,
  colorGrayLight,
  colorGrayLighter,
  colorGrayLightest,
  colorBorder,
  colorTransparent,
  colorUserModerator,
  colorBlueLight,
  colorBlueLighter,
  colorBlueLightest,
  colorBlueLightestChannel,
  colorBlueLighterChannel,
  colorPrimary,
  colorDanger,
  colorDangerDark,
  colorSuccess,
  colorWarning,
  colorBackground,
  colorOverlay,
  userListBg,
  userListText,
  unreadMessagesBg,
  colorGrayLabel,
  colorText,
  colorLink,
  listItemBgHover,
  colorTipBg,
  itemFocusBorder,
  btnDefaultColor,
  btnDefaultBg,
  btnDefaultBorder,
  btnDefaultGhostColor,
  btnDefaultGhostBg,
  btnDefaultGhostBorder,
  btnDefaultGhostActiveBg,
  btnPrimaryBorder,
  btnPrimaryColor,
  btnPrimaryBg,
  btnPrimaryHoverBg,
  btnPrimaryActiveBg,
  btnSuccessBorder,
  btnSuccessColor,
  btnSuccessBg,
  btnWarningBorder,
  btnWarningColor,
  btnWarningBg,
  btnDangerBorder,
  btnDangerColor,
  btnDangerBg,
  btnDarkBorder,
  btnDarkColor,
  btnDarkBg,
  btnOfflineBorder,
  btnOfflineColor,
  btnOfflineBg,
  btnMutedBorder,
  btnMutedColor,
  btnMutedBg,
  toolbarButtonColor,
  toolbarButtonColorDisabled,
  userThumbnailBorder,
  loaderBg,
  loaderBullet,
  btnDangerBgHover,
  systemMessageBackgroundColor,
  systemMessageBorderColor,
  systemMessageFontColor,
  highlightedMessageBackgroundColor,
  highlightedMessageBorderColor,
  emphasizedMessageBackgroundColor,
  colorHeading,
  palettePlaceholderText,
  pollAnnotationGray,
  toolbarButtonBorderColor,
  toolbarListColor,
  toolbarButtonBg,
  toolbarListBg,
  toolbarListBgFocus,
  pollStatsBorderColor,
  pollBlue,
  colorContentBackground,
  dropdownBg,
  toastDefaultColor,
  toastDefaultBg,
  toastInfoColor,
  toastInfoBg,
  toastSuccessColor,
  toastSuccessBg,
  toastErrorColor,
  toastErrorBg,
  toastWarningColor,
  toastWarningBg,
  webcamBackgroundColor,
  webcamPlaceholderBorder,
  webcamTalkingBackgroundColor,
  SegmentedButtonRingOffsetShadow,
  SegmentedButtonRingShadow,
  SegmentedButtonBoxShadowSm,
  slate900,
  darkCyanLime,
  colorInfoBoxQuizText,
  colorInfoBoxQuizBg,
  colorInfoBoxQuizBorder,
  colorSelectedCorrectAnswerText,
  colorSelectedCorrectAnswerBg,
  colorSelectedCorrectAnswerTextActive,
  colorSelectedCorrectAnswerBgActive,
  colorGreen600,
  colorGreen100,
};
