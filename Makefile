messages:
	itstool -o locales/messages.pot index.html
	msgmerge -U locales/en.po locales/messages.pot

compile-messages:
	msgfmt locales/en.po --output-file locales/en.mo

i18next:
	i18next-conv -l en -s locales/en.po -t locales/en/translation.json --keyseparator="#"

deps:
	sudo npm install i18next-conv -g
