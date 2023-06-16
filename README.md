# Dictionary test app

## node version v16.17.0

## Запуск проекта:

В директории **_config_** -> **_env_** копировать **.env.example** как **.env**

### Бек был выбран **https://dictionary.skyeng.ru/doc/api/external**, так как в предложенных я не смог получить ключ для запросов

### На сервере есть 2 endpoint'a для получения слов по поиску и для получения сохраненных значений

## Структура проекта:

📦config
┣━ 📂build - конфиг **webpack**
┗━ 📂env - переменные окружения
📦src
┣━ 📂assets
┃ ┗━ 📂icons - иконки svg
┣━ 📂components - переиспользуемые компоненты
┣━ 📂constants - глобальные константы
┣━ 📂enums - глобальные еnums
┣━ 📂formatters - глобальные форматеры
┣━ 📂helpers - глобальные хелперы
┣━ 📂hooks - глобальные хуки
┣━ 📂layouts - layout приложения
┣━ 📂pages - все страницы приложения
┣━ 📂services - сервисы приложени
┃ ┣━ 📂constants - константы сервисов
┃ ┣━ 📂types - типы сервисов
┃ ┣━ 📂[название slice] - все сервисы (методы запросов) для slice
┃ ┣━ 📜LocalStorage.ts - сервис для работы с localstorage
┃ ┗━ 📜api.ts - api (fetch)
┣━ 📂store - redux store приложения
┃ ┣━ 📂hooks - хуки redux
┃ ┣━ 📂middlewares - мидолвары
┃ ┣━ 📂types - типы redux
┃ ┣━ 📂utils - utils для работы со store redux
┃ ┣━ 📂[название slice]
┃ ┃ ┣━ 📜actions.ts - экшены slice
┃ ┃ ┣━ 📜selectors.ts - селекторы slice
┃ ┃ ┣━ 📜slice.ts - slice
┃ ┃ ┗━ 📜types.ts - типы данного slice
┃ ┣━ 📜StoreProvider.tsx - компонент wrapper provider store
┃ ┗━ 📜index.ts - подключение всех slice в store
┣━ 📂styles - глобальные стили
┃ ┣━ 📂config - конфиг tailwindcss
┃ ┣━ 📜global.scss - подключение конфига tailwindcss
┃ ┗━ 📜index.scss - подключение всех стилей
┣━ 📂types - глобальные типы
┣━ 📂ui - ui компоненты для дизайнсистемы
┣━ 📂utils - глобальные utils
┣━ 📜App.tsx - App компоненты
┣━ 📜index.tsx - index.tsx файл
┣━ 📜routes.tsx - роутинг приложения
