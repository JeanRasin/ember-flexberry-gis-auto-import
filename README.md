# ember-flexberry-gis-auto-import

This README outlines the details of collaborating on this Ember addon.

## Installation

* `git clone <repository-url>` this repository
* `cd ember-flexberry-gis-auto-import`
* `npm install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

Задача. 
Реализовать динамическую загрузку. https://github.com/Flexberry/ember-flexberry-gis/issues/237.
Реализацию в самом проекте https://github.com/Flexberry/ember-flexberry-gis.git не получилось сделать из-за сложности зависимостей и настроек пакетов. 
Для работы была создана ветка feature-237-dynamic-dependency-loading.

Был создан отдельный проект https://github.com/JeanRasin/ember-flexberry-gis-auto-import.git где реализована динамическая загрузка пакета leaflet.
Что бы можно было это перенести в основной проект нужно установить пакет ember-auto-import, обновить устаревшие пакеты, добавить настройки и изменить код.
Все необходимые изменить для работы ember-auto-import и со зависимых пакетов можно посмотреть в истории git.

Последние версии пакетов не подходят, часто приходилось выбирать конкретные, например, "ember-cli": "2.15.1", "ember-i18n": "4.3.2". 
Было множество проблем с настройками для babel ошибки которые сложно понять. А также странное поведение, например, вызывало ошибку наличие "keywords": ["ember-addon"] в package.json.
Проблемы решались настройками конфига.

Так же был создан пустой проект https://github.com/JeanRasin/ember-quickstart2151-import.git в котором был сделан тестовый rout, установлены все пакеты и добавлены все файлы из проекта ember-flexberry-gis. 
Проект запускался со всеми необходимыми пакетами без ошибок.
Выводится ошибка после слива туда файлов из проекта ember-flexberry-gis. 
Ошибка: coordinate-reference-systems.js:9 Uncaught RangeError: Maximum call stack size exceeded. Связанна с папками app\initializers, app\instance-initializers.

Не решённая задача.
Установить все пакеты и настроить, что бы проект запускался без ошибок. Добавить динамическую загрузку реализовать не трудно.
