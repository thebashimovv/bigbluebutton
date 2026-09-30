# Bilermen

Bilermen — платформа видеоконференций на основе BigBlueButton 3.0.
Интерфейс и все функции BBB остаются стандартными; изменено только:
туркменский язык, 4 языка (English, Русский, Türkçe, Türkmençe) и название
Bilermen в текстах интерфейса.

Ветка `bilermen` основана на релизе BigBlueButton `v3.0.37`.

## Установка на сервер (Ubuntu 22.04)

Требования: 8+ ядер, 16+ ГБ RAM, публичный IP, домен, указывающий на сервер,
открытые порты TCP 80/443 и UDP 16384–32768.

```bash
wget https://raw.githubusercontent.com/thebashimovv/bigbluebutton/bilermen/bilermen/install.sh
sudo bash install.sh -s meet.example.tm -e admin@example.tm -g
```

`-g` дополнительно ставит Greenlight (страница для создания комнат).
Скрипт:

1. ставит BigBlueButton 3.0 официальным `bbb-install.sh` (если его ещё нет);
2. собирает клиент Bilermen из этой ветки и заменяет им стандартный;
3. кладёт брендинг в `/etc/bigbluebutton/bbb-html5.yml` (см. `bbb-html5.yml`);
4. запрещает `apt upgrade` перезаписывать клиент (`apt-mark hold bbb-html5`).

## Обновление клиента после новых коммитов

```bash
sudo bash /opt/bilermen/src/bilermen/install.sh -u
```

## Подтягивание новой версии BigBlueButton

```bash
git fetch upstream --tags
git rebase --onto v3.0.38 v3.0.37 bilermen   # пример: переход с 3.0.37 на 3.0.38
git push --force-with-lease origin bilermen
```

После этого обновите сервер (`sudo apt-mark unhold bbb-html5 && sudo apt update && sudo apt upgrade`)
и запустите `install.sh -u`. Версия пакетов на сервере и версия, на которой
основана ветка, должны совпадать — скрипт предупредит, если это не так.

## Лицензия

BigBlueButton распространяется под LGPL-3.0 (см. `LICENSE`). Уведомления о
лицензии в исходном коде сохранены; исходный код изменений открыт в этом
репозитории.
