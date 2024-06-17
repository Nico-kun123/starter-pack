# Упрощение разработки проектов для тех, кому лень 😴

## 📑Содержание

- [Начало](#-начало) 👀
- [Пояснение](#-пояснение)

  - [jest.config.[tj]s](#jestconfigtjs)
  - [package.json](#packagejson)
  - [README файлы](#readme-файлы)
  - [tsconfig.json](#tsconfigjson)
  - [vite.config.[tj]s](#viteconfigtjs)
  - [vitest.config.[tj]s](#vitestconfigtjs)
  - [.gitignore](#gitignore)

- [Перед разработкой](#перед-разработкой) 👀
- [Во время разработки](#во-время-разработки) 👀
- [В конце разработки](#в-конце-разработки) 👀

  - [ПРОИЗВОДИТЕЛЬНОСТЬ САЙТА В ЦЕЛОМ](#производительность-сайта-в-целом)
  - [ОПТИМИЗАЦИЯ ИЗОБРАЖЕНИЙ](#оптимизация-изображений)
  - [ОПТИМИЗАЦИЯ CSS](#оптимизация-css)
  - [ОПТИМИЗАЦИЯ ШРИФТОВ](#оптимизация-шрифтов)
  - [SEO ОПТИМИЗАЦИЯ](#seo-оптимизация)
  - [НАПИСАНИЕ ТЕСТОВ](#написание-тестов)
  - [ПУБЛИКАЦИЯ НА GITHUB PAGES](#публикация-на-github-pages)

- [Стек разработки](GUIDE%20СТЕК.md) 👀
- [Дополнительно](#дополнительно)
- [Полезные ссылки](#-полезные-ссылки)

---

## 👀 Начало

Перед тем, как начать что-либо, нужно клонировать данный репозиторий:

```cmd
git clone https://nico-kun123.github.io/starterpack
```

В нём будет несколько файлов, которые в теории должны помочь с разработкой проектов:

- **[GUIDE.md](#readme-файлы)**. Файл, который ты сейчас читаешь 😎.
- **[GUIDE СТЕК.md](#readme-файлы)**. Здесь больше инфы и советов по различным технологиям и инструментам.
- **[README-ШАБЛОН.md](#readme-файлы)**. Файл, с шаблоном README-файла. В конце разработки просто переименуй файл в "README\.md" и всё.
- **[UML.md](#readme-файлы)**. Дополнительный файл на случай, когда нужно сделать UML-диаграмму. В нём есть основные ссылки.
- **[jest.config.[tj]s](#jestconfigtjs)**. Файл настройки Jest (для js/ts). Здесь указаны: папка с тестами, папка для кэша, папка для информации по покрытию тестами (**Подробнее про конфигурацию этого файла можно почитать здесь**: <https://jestjs.io/docs/configuration>). Годится для простых проектов (не сайтов).
- **[package.json](#packagejson)**. Здесь есть все необходимые скрипты, которые помогут с build и production (и некоторые дополнительные скрипты).
- **[tsconfig.json](#tsconfigjson)**. Главный файл для работы с Typescript, с помощью которого будут создаваться соответствующие js-файлы. Также конфигурация этого файла будет влиять на работу компилятора во время написания кода (**Подробнее про конфигурацию этого файла можно почитать здесь**: <https://habr.com/ru/articles/542234/> и <https://www.typescriptlang.org/tsconfig>).
- **[vite.config.[tj]s](#viteconfigtjs)**. Файл для дальнейшей сборки проекта в production. В большинстве случаев его настраивать не нужно. Нужен для проектов-сайтов.
- **[vitest.config.[tj]s](#vitestconfigtjs)**. Файл конфигурации инструмента для тестирования "vitest". Годится в основном для тестирования компонентов Vue и React (**Подробнее про конфигурацию этого файла можно почитать здесь**: <https://vitest.dev/config/>).
- **"cssMIN.css"**. Базовый набор стилей для сайта.

---

## 🤓 Пояснение

Ниже представлены подробные пояснения насчёт каждого из файлов, которые были клонированы из этого репозитория.

### jest.config.[tj]s

> [!NOTE]
> ❗ Более подробно про установку **Jest**, его конфигурацию и использование можно почитать в разделе "[Jest](#jest)" данного файла.

Просто создай этот файл в корне своего проекта. Примерное содержание будет следующим:

```js
// Jest configuration file EXAMPLE.
// Link: https://jestjs.io/docs/configuration
module.exports = {
  // Пресет для тестов
  preset: 'ts-jest',

  // Среда для тестов
  testEnvironment: 'node',
  // Паттерн для поиска тестов
  testMatch: ['**/__tests__/jest/*.[jt]s?(x)'],

  // Трансформеры для тестов (преобразует файлы в js)
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  },

  // Папка для отчетов о покрытии
  coverageDirectory: './__tests__/jest/Test Coverage',
  // Папка для кэша
  cacheDirectory: './__tests__/jest/cache',

  // Количество потоков для тестов
  workerThreads: true,
  showSeed: true
}
```

Этот файл рассчитан на использование Jest вместе с Typescript. Здесь используется дополнительные параметры настройки для Typescript:

- **preset**. Так как Jest сам не может поддерживать Typescript, то нужно дополнительно установить пакет `ts-jest`.
- **transform**. Здесь он преобразует файлы Typescript в файлы Javascript, используя пресет `ts-jest`.

Можно сделать **"transform"** по-другому, используя `babel-jest`:

```js
// Для .js, .jsx, .ts и .tsx файлов
"transform": {
  "\\.[jt]sx?$": "babel-jest",
  "\\.css$": "some-css-transformer",
}
```

### package.json

Файл "package.json" содержит несколько важных полей, в том числе:

- **scripts**: список скриптов, которые можно запустить с помощью команды `npm run`.
- **dependencies**: список зависимостей, необходимых для запуска вашего проекта. Эти зависимости устанавливаются NPM и перечислены в разделе зависимостей вашего файла package.json.
- **devDependencies**: список зависимостей, которые необходимы только для разработки, например инструментов тестирования или сборки. Для того, чтобы пакет был установлен сюда, нужно после команды `npm install \*название пакета\*` добавить `--save-dev` (или просто "**-D**").

Пример содержания `package.json` (со всеми скриптами, которые возможны на данный момент):

```json
{
  "name": "my-portfolio",
  "version": "0.0.0",
  "description": "Мой гайд по более быстрому старту и ускорению разработки проектов 😎",
  "private": true,
  "homepage": "https://nico-kun123.github.io/",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "npm run build && vite preview",

    "test:unit": "vitest",
    "test": "jest --config=jest.config.js --watchAll --cache",
    "coverage": "jest --config=jest.config.js --coverage --watchAll --cache",
    "clearCache": "jest --clearCache",

    "type-check": "vue-tsc --build --force",

    "lint": "eslint src --ext .ts",
    "lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore",
    "lint:fix": "npm run lint -- --fix",

    "format": "prettier --write \"./**/*.{js,jsx,mjs,cjs,ts,tsx,json}\"",

    "deploy": "npm run build && gh-pages -d dist"
  },
  "keywords": [],
  "author": {
    "name": "Nicolay Kudryavtsev"
  },
  "license": "ISC",
  "dependencies": {},
  "devDependencies": {
    "@jest/globals": "^29.7.0",
    "@types/jest": "^29.5.11",
    "jest": "^29.7.0",
    "ts-jest": "^29.1.1",
    "ts-node": "^10.9.2",
    "typescript": "^5.3.3"
  }
}
```

### README файлы

> [!TIP]
> Не удаляй эти файлы до окончания разработки проекта.
>
> - По завершению разработки просто скопируй содержимое файла "`README-ШАБЛОН.md`" в файл "`README.md`", а затем подкорректируй его.
> - Перед оправкой проекта оставь только файл "`README.md`"

После клонирования репозитория в проекте будет файлов с форматом ".md":

- **GUIDE\.md**. Файл, который ты сейчас читаешь 😎.
- **GUIDE СТЕК\.md**. Здесь больше инфы и советов по различным технологиям и инструментам.
- **README-ШАБЛОН\.md**. Файл, с шаблоном README-файла. Просто скопируй содержимое в главный README-файл, а файл "README-ШАБЛОН" удали.
- **README\.md**. Основной файл с описанием по установке, настройке и тп. Также здесь представлены скриншоты проекта и использованный стек технологий.
  **UML\.md**. Дополнительный файл на случай, когда нужно сделать UML-диаграмму. В нём есть основные ссылки.

В папке "README examples" есть примеры уже готовых README-файлов. На случай, если нужен reference 💅.

### tsconfig.json

> [!NOTE]
> ❗ Про Typescript подробнее написано **[здесь](#typescript)**.

Главный файл для работы с Typescript, с помощью которого будут создаваться соответствующие js-файлы. Также конфигурация этого файла будет влиять на работу компилятора во время написания кода.

Простой пример написания файла `tsconfig.json`:

```json
{
  "compilerOptions": {
    /* Visit https://aka.ms/tsconfig to read more about this file */

    /* Projects */
    //...

    /* Language and Environment */
    "target": "es2016" /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */,

    /* Modules */
    "module": "commonjs" /* Specify what module code is generated. */,

    /* JavaScript Support */
    "allowJs": true /* Allow JavaScript files to be a part of your program. Use the 'checkJS' option to get errors from these files. */,
    "checkJs": true /* Enable error reporting in type-checked JavaScript files. */,

    /* Emit */
    "removeComments": true /* Disable emitting comments. */,
    "noEmitOnError": true /* Disable emitting files if any type checking errors are reported. */,

    /* Interop Constraints */
    "esModuleInterop": true /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */,
    "forceConsistentCasingInFileNames": true /* Ensure that casing is correct in imports. */,

    /* Type Checking */
    "strict": true /* Enable all strict type-checking options. */,
    "alwaysStrict": true /* Ensure 'use strict' is always emitted. */,
    "noUnusedLocals": true /* Enable error reporting when local variables aren't read. */,

    /* Completeness */
    "skipLibCheck": true /* Skip type checking all .d.ts files. */
  },
  "files": ["./index.ts"],
  "include": ["./__tests__"],
  "exclude": []
}
```

Среди наиболее важных настроек, можно отметить следующее:

- **"noEmitOnError"**: определяет, должен ли TypeScript прерывать процесс компиляции при возникновении ошибок, связанных с неправильными типами. Рекомендуемым значением данной нстройки является _true_
- **"removeComments"**: _true_
- **"suppressImplicitAnyIndexErrors"**: _true_.
- **"strict"**: дополнительные проверки. До тех пор, пока у вас не появится веской причины для отключения данной настройки, она должна иметь значение _true_.
- **"noEmitHelpers"**: при необходимости, TypeScript предоставляет утилиты и полифилы для поддержки возможностей, которых не было в ES3 и ES5. Если значение данной настройки является _false_, утилиты будут помещены в начало кода, в противном случае, они будут опущены (tslib можно устанавливать отдельно).

❗ **Подробнее про конфигурацию этого файла можно почитать здесь**: <https://habr.com/ru/articles/542234/> и <https://www.typescriptlang.org/tsconfig>

❗ Более подробный файл со всеми возможными параметрами настройки уже по умолчанию находится в этом проекте (**Нажми, чтобы его открыть: [tsconfig.json](./Quick%20Start/tsconfig.json)**).

Чтобы указать компилятору, какие именно файлы и папки нужно смотреть во время сборки (скрипт `build`), а какие не нужно, необходимо добавить поля `"files"`, `"include"` и `"exclude"` в файл `tsconfig.json`.

Пример настройки:

```json
{
  "compilerOptions": {
    // ...
  },
  "files": ["./index.ts"],
  "include": ["./__tests__"],
  "exclude": []
}
```

### vite.config.[tj]s

> [!NOTE]
>
> Почитать про конфигурацию подробнее:
> <https://vite-docs-ru.vercel.app/config/>

Содержание файла конфигурации:

```js
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import pluginPurgeCss from '@mojojoejo/vite-plugin-purgecss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [pluginPurgeCss(), vue()],
  optimizeDeps: {
    include: ['vue']
  },
  base: './',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      // Кэширование и сжатие JS
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // ПЕРЕМЕННЫЕ SCSS 👀
        additionalData: '@import "@/assets/_variables.scss";'
      }
    }
  }
})
```

### vitest.config.[tj]s

> [!NOTE]
>
> Почитать про конфигурацию подробнее:
> <https://vitest.dev/config/>

После того, как был создан проект с помощью Vite, нужно установить все зависимости:

```cmd
npm i -D vitest jsdom
```

Здесь есть **_jsdom_**, чтобы иметь возможность делать mocking для DOM API:

```js
// @vitest-environment jsdom
// ...
```

Добавление строки комментария @vitest-environment jsdom вверху файла позволит нам делать mocking для DOM API для всех тестов в файле.

Пример файла конфигурации:

```js
import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

import Vue from '@vitejs/plugin-vue'

export default mergeConfig(
  viteConfig,
  defineConfig({
    plugins: [Vue()],
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/*'],
      root: fileURLToPath(new URL('./', import.meta.url))
    }
  })
)
```

Сами тесты очень похожи на Jest. Команды для запуска тестов также похожи на команды Jest:

```json
"scripts": {
    "test": "vitest --config vitest.config.js --watch --cache",
    "test:unit": "vitest",
    "coverage": "vitest --config vitest.config.js --coverage --watch --cache",
    "clearCache": "vitest --clearCache"
  },
```

❗ **Подробнее про npm-скрипты для vitest можно почитать [здесь](https://vitest.dev/guide/cli.html)**.

### .gitignore

```gitignore
#! Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

#! Nuxt dev/build outputs
.output
.data
.nuxt
.nitro
.cache
.env

#! Misc
.DS_Store
.fleet

#! Можно убрать в некоторых случаях (gh-pages)
.vscode/*
dist

#! Папки с кэшем и инфой о покрытии тестами
# /__tests__/jest/cache
# /__tests__/jest/Test Coverage

node_modules
dist-ssr
*.local

#! Editor directories and files
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```

---

## Перед разработкой

Попробуем создать проект, используя Vite. Нужно будет выбрать фреймворк (или без него) + всякие вспомогательные штуки:

```cmd
npm create vite@latest
```

Также можно создать проект на **Vue**, используя конкретную команду. Здесь будет предложено больше опций для добавления в проект (Vue Router, Pinia и тп). Этот вариант предпочтительнее:

```cmd
npm create vue@latest
```

❗ **Добавим скрипты в `package.json`**:

```json
{
  "name": "my-portfolio",
  "version": "0.0.0",
  "description": "Мой гайд по более быстрому старту и ускорению разработки проектов 😎",
  "private": true,
  "homepage": "https://nico-kun123.github.io/",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "npm run build && vite preview",

    "test:unit": "vitest",
    "test": "jest --config=jest.config.js --watchAll --cache",
    "coverage": "jest --config=jest.config.js --coverage --watchAll --cache",
    "clearCache": "jest --clearCache",

    "type-check": "vue-tsc --build --force",

    "lint": "eslint src --ext .ts",
    "lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore",
    "lint:fix": "npm run lint -- --fix",

    "format": "prettier --write \"./**/*.{js,jsx,mjs,cjs,ts,tsx,json}\"",

    "deploy": "npm run build && gh-pages -d dist"
  },
  "keywords": [],
  "author": {
    "name": "Nicolay Kudryavtsev"
  },
  "license": "ISC",
  "dependencies": {},
  "devDependencies": {
    "@jest/globals": "^29.7.0",
    "@types/jest": "^29.5.11",
    "jest": "^29.7.0",
    "ts-jest": "^29.1.1",
    "ts-node": "^10.9.2",
    "typescript": "^5.3.3"
  }
}
```

❗ **Нужно добавить и настроить Prettier для своего проекта. Вот как это сделать**:

- Установить Prettier:

```cmd
nmp i -D prettier
```

- Добавить файл конфигурации Prettier (`.prettierrc.json`):

```json
{
  "$schema": "https://json.schemastore.org/prettierrc",
  "printWidth": 100,
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "none"
}
```

- В папку `.vscode` нужно добавить 2 файла:

extensions.json:

```json
{
  "recommendations": ["dbaeumer.vscode-eslint", "esbenp.prettier-vscode"]
}
```

settings.json:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll": "explicit"
  },
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

Теперь всё работает! При каждом сохранении файла он будет отформатирован 😎.

Дальше нужно установить пакет `@mojojoejo/vite-plugin-purgecss
` и настроить файл конфигурации Vite.js:

```cmd
npm i -D @mojojoejo/vite-plugin-purgecss
```

vite.config.[jt]:

```js
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import pluginPurgeCss from '@mojojoejo/vite-plugin-purgecss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [pluginPurgeCss(), vue()],
  optimizeDeps: {
    include: ['vue']
  },
  base: './',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      // Кэширование и сжатие JS
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // ПЕРЕМЕННЫЕ SCSS 👀
        additionalData: '@import "@/assets/_variables.scss";'
      }
    }
  }
})
```

Создать отдельный файл для переменных (например, `_variables.scss`):

```scss
$background-body: #ffe5e5;
$background: #efefef;

// PADDING & MARGIN
$padding-main: 15px;
$margin-main: 30px;

// NAVBAR
$navbar-color: #756ab6;

// TEXT
$selection: #ffffff;
$text-main: #ffffff;
$text-bright: #ffffff;
$text-muted: #70777f;
$font-family: 'Open Sans', sans-serif;
$line-height: 1.5;

// FONT SIZE
$font-size-b: 14pt;
$font-size-m: 12pt;
$font-size-s: 10pt;

// FONT SIZE (H1)
$font-size-header-b: 20pt;
$font-size-header-m: 16pt;
$font-size-header-s: 12pt;

// LINKS
$links: #13a0ff;
$focus: #3738ca;

// BORDER
$border: #cf8c8c;
$border-radius: 15px;
$box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);

// ANIMATION
$animation-duration: 0.1s;

$button-base: #c9dbf1;
$button-hover: #7fbde5;

$scrollbar-thumb: #a9e4f5;
$scrollbar-thumb-hover: $button-hover;

$form-placeholder: #949494;
$form-text: #180202;
```

Потом это можно импортировать в `base.scss`:

```scss
@use 'variables' as vars; // или без "vars"

*,
*::before,
*::after {
  // ...
  font-family: vars.$font-family;
  line-height: vars.$line-height;
  transition: vars.$animation-duration;
  // ...
}
```

---

## Во время разработки

Можно, например, определиться со шрифтами на сайте. Сами шрифты можно взять с [Google Fonts](https://fonts.google.com), но шрифты нужно будет оптимизировать (убрать лишние языки, правильно на сайт их импортировать и тп). Подробнее об этом написано в **следующем разделе**.

Не надо делать рефакторинг сразу же: самое главное — чтобы всё просто работало 🙏, а код улучшить лучше потом.

Если придётся что-то тестировать, то нужно создать отдельную папку для тестовых файлов.

Папку `\_\_tests\_\_` стоит расположить:

- В корне проекта, если проект простой (например, не является сайтом).
- В папке `./src`, если проект — это сайт. При использовании Vue.js или React.js стоит расположить данную папку в папке с компонентами (`./src/components`).

Некоторые тесты можно делать параллельно (**test.concurrent**), чтобы сэкономить время тестирования. Также можно кешировать тесты.

---

## В конце разработки

### ПРОИЗВОДИТЕЛЬНОСТЬ САЙТА В ЦЕЛОМ

Проверим **производительность сайта**, используя некоторые полезные инструменты:

1. **[Расширение "Lighthouse" для Chrome](https://chromewebstore.google.com/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=ru)**. В DevTools есть соответствующая вкладка для расширения. Расширение может проверить производительность для Desktop и Mobile и дать рекомендации по её улучшению. Лучше открыть тестируемый сайт в режиме incognito, потому что расширения браузера могут замедлять загрузку сайта!
2. **["WebPageTest"](https://www.webpagetest.org)**. Инструмент, похожий на Lighthouse.
3. **[Google PageSpeed Insights](https://pagespeed.web.dev)**. Проще говоря, это Lighthouse, но на русском языке.

### ОПТИМИЗАЦИЯ ИЗОБРАЖЕНИЙ

Для того, чтобы улучшить оптимизацию, можно попробовать сделать следующее:

1. **Изменить размер используемых изображений**.
   - Если на сайте картинка (**png, jpg и jpeg**) отображается с размером не больше 150x150, то нет смысла загружать на сайт изображения с размером больше данного: это больше времени для загрузки + больше интернета будет расходоваться.
   - Для **svg** изображений уменьшение размеров не так страшно, потому что качество у изображений остаётся неизменным.
2. [Оптимизатор изображений](https://imagecompressor.com/ru/). Можно его попробовать, но я не уверен, стоит ли оно того или нет (Vite самостоятельно сжимает файлы для production. Я не уверен, что уже сжатые изображения хоть что-то изменят).

Для **svg** нет какого-либо "правильного" способа добавления на сайт: если кода у svg не очень много, то svg можно просто вставить прямо в HTML-код, иначе вставить ссылкой.

**JPEG (он же JPG)** — это формат изображений, который использует **сжатие с потерями и не поддерживает прозрачность**. Позволяет настраивать уровень качества сохраняемого изображения — при его снижении удаляются детали и добавляются шумы на изображение, однако размер становится более компактным. С прикладной точки зрения JPEG оптимален для изображений с большим количеством цветов, например, для фотографий.

**PNG** — это формат изображений, который работает с полноцветными изображениями, использует **сжатие без потерь и позволяет сохранять прозрачность**. Настроить качество сохранения в PNG 24 невозможно, однако, можно снизить количество цветов в изображении.

После изменений размеров изображений можно попробовать сжатие изображений без потерь:

### ОПТИМИЗАЦИЯ CSS

Можно воспользоваться "[PurgeCSS](https://purgecss.com)", который уберёт все ненужные/неиспользуемые стили из проекта. Это особенно полезно, если в проекте используются всякие Bootstrap или Tailwind CSS, которые предоставляют кучу всего, и всегда останутся множество неиспользуемых штук.

Другие варианты:

- **[Оптимизатор CSS](http://alexvaleev.ru/cssoptimizer/)**.
- После применения оптимизатора стоит использовать **[Автопрефиксер CSS](https://autoprefixer.github.io/ru/)** для добавления всяких префиксов `-webkit`, `-moz` и тп.
- [vite-plugin-purgecss](https://github.com/jowast/vite-plugin-purgecss). Тоже самое, но для Vite.

### ОПТИМИЗАЦИЯ ШРИФТОВ

> [!NOTE]
>
> 👀 Можно воспользоваться [Оптимизатором шрифтов](https://quick-site-upgrade.com/tools/web-font-optimizer), чтобы выбрать только определённые языки (RU, ENG и тп). Файлы будут весить меньше. (Альтернативный сервис: [transfonter](https://transfonter.org)).

Лучший формат файла с шрифтами — **woff2** или **woff**.

```css
@font-face {
  font-family: 'НАЗВАНИЕ';

  /* Specify the woff2 file in the first line */
  src:
    url('/fonts/regular-russian.woff2') format('woff2'),
    url('/fonts/regular-russian.woff') format('woff'),
    url('/fonts/regular-russian.ttf') format('truetype');

  font-style: normal;
  font-weight: 400;
}
```

Если шрифт в проекте локальный:

```css
@font-face {
  font-family: 'MyHelvetica';
  src: local('Helvetica Neue Bold'), local('HelveticaNeue-Bold'), url('MgOpenModernaBold.ttf');
  font-weight: bold;
}
```

Правило **[@font-face](https://developer.mozilla.org/ru/docs/Web/CSS/@font-face)** позволяет указывать онлайн-шрифты для отображения текста на своих веб-страницах. **@font-face** устраняет необходимость зависеть от ограниченного количества шрифтов, установленных пользователями на их компьютерах.

_И ещё один совет_: Используйте дескриптор **[font-display](https://developer.mozilla.org/ru/docs/Web/CSS/@font-face/font-display)**.
Дескриптор **font-display** определяет то, как шрифт, подключённый через font face будет отображаться в зависимости от того, загрузился ли он и готов ли к использованию.

Значения **"font-display"**:

- **"auto"**. Поведение по умолчанию. Чаще всего используется режим «block» о котором ниже (**обычно им нужно пользоваться**).
- **"block"**. Ждём 3 секунды, пока не загрузится основной шрифт. Всё это время текст скрыт со страницы. Если основной шрифт не успел загрузиться, то используем резервный или страховочный. Как только основной шрифт всё же загрузится, переключаемся на него. То есть, в этом варианте текст может быть скрыт от пользователя на время до 3 секунд.
- **"swap"**. Используем резервный шрифт или страховочный сразу. Когда загрузится основной, используем его. Текст отображается на странице с первой секунды.
- **"fallback"**. Ждём 0.1 секунды пока не загрузится основной шрифт. Всё это время текст скрыт со страницы. После этого используем резервный или страховочный. Если основной шрифт успел загрузиться за 3 секунды, то используем его. Если основной шрифт не успел загрузиться за 3 секунды, то продолжаем использовать резервный или страховочный.
- **"optional"**. Ждём 0.1 секунды пока не загрузится основной шрифт. Если он не загрузился, то используем резервный или страховочный. Даже если основной шрифт загрузится, то продолжаем использовать резервный или страховочный.

Также можно добавить к `:root` стиль `text-rendering`. Он предоставляет движку рендеринга информацию о том, что оптимизировать при рендеринге текста:

- **"auto"**. Браузер делает обоснованные предположения о том, когда оптимизировать скорость, разборчивость и геометрическую точность при рисовании текста. Различия в том, как это значение интерпретируется браузером.
- **"optimizeSpeed"**. Браузер подчеркивает скорость рендеринга, а не геометрическую точность при рисовании текста. Это отключает кернинг и лигатуры.
- **"optimizeLegibility"**. Браузер подчеркивает удобочитаемость, а не скорость рендеринга и геометрическую точность. Это позволяет кернинг и необязательные лигатуры.
- **"geometricPrecision"**. Браузер подчеркивает геометрическую точность над скоростью рендеринга и удобочитаемостью. Некоторые аспекты шрифтов, такие как кернинг, не масштабируются линейно. Таким образом, это значение может сделать текст с использованием этих шрифтов выглядеть хорошо.

Ещё совет: _Предварительно загрузите файлы шрифтов_.

Используя `link rel = "preload"` в нашем html head, мы можем указать браузеру начать выборку наших шрифтов раньше. Добавьте следующий тег в верхнюю часть вашего **head** (перед любым css), установив атрибут **href** для URL-адреса вашего файла шрифта:

Мой способ это сделать:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link
  rel="preload"
  as="style"
  href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&display=swap"
/>
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&display=swap"
  media="print"
  onload="this.media='all'"
/>

<!-- Если шрифт стоит локально -->
<link rel="preload" href="OpenSans-Regular.woff2" as="font" type="font/woff2" crossorigin />
```

Лучше предварительно загружать **ТОЛЬКО 1 ШРИФТ**! Браузеры обычно достаточно умны, чтобы загружать шрифты только в том случае, если они необходимы на текущей странице. Использование предварительной загрузки отменяет это поведение, заставляя браузер загружать шрифт, даже если он не используется.

### SEO ОПТИМИЗАЦИЯ

> [!TIP]
>
> Проверить мета-теги сайта можно [здесь](https://metatags.io).

Здесь можно предпринять несколько шагов:

1. **Создание метатегов**. В HTML-коде прописываются ключевые слова:

   - **В title**, заголовок страницы, вставляются высокочастотные ключевые слова в определенном порядке. Его пользователь видит в качестве заголовка для сниппета, поэтому допустимая длина не более 60–70 символов.
   - **В description**, описание страницы, вставляется не более 160 символов с оставшимися ключевыми словами. Данный мета-тег пользователь видит в сниппете в поисковой выдаче. Разумно добавлять в него эмоджи, призывы к действию, преимущества компании - это поможет улучшить кликабельность snippet.
   - **Мета-тег keywords** уже не используется поисковыми роботами, однако можно прописать 2-3 основные ключевые фразы.

2. **Настраивают редиректы, статус-коды**. Это производят для склеивания дублирующих страниц, правильной настройки зеркал, грамотной подаче 404-й ошибки на странице. Последняя должна быть оформлена в едином дизайне со всем ресурсом, иметь ссылки на работающие страницы и поиск по сайте.

Проводя внешнюю оптимизацию, необходимо учитывать несколько правил, снижающих риск попадания нового ресурса под поисковый бан:

- [Анкоры](https://malevich1.ru/ankor) должны быть разнообразными, соответствующими тематике донора. Текстовое обрамление должно содержать низкочастотную или среднечастотную ключевую фразу. Анкорные ссылки необходимо чередовать с безанкорными (url, слова "тут", "здесь", "на сайте");
- Резкий рост ссылочной массы за один раз может вызвать скачок, вызывающий подозрение у поисковых систем Google, «Яндекс». Наращивать ее лучше постепенно, с течением времени;
- Недавно проиндексированные (или еще не прошедшие индексацию) страницы, на начальных стадиях работы ресурса, получившие множество сторонних вхождений, также рискуют попаданием под санкции.

Пример мета-тегов в HTML-файле:

```html
<!doctype html>
<html lang="ru">
  <head>
    <!-- IMPORTANT TAGS -->
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- <meta name="robots" content="index" /> -->
    <title>My Portfolio</title>
    <meta
      name="description"
      content="Моё портфолио (Frontend разработчик). Intern, Junior developer."
    />
    <meta
      name="keywords"
      content="HTML, CSS, JavaScript, Vue.js, Vite.js, Portfolio, Github pages, i18n"
    />

    <!-- OPTIONAL TAGS -->
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="Author" content="Кудрявцев Николай" />
    <meta name="Copyright" content="Кудрявцев Николай" />
    <meta name="Address" content="Россия, г. Красноярск" />

    <!-- OTHERS -->
    <meta http-equiv="Content-Language" content="ru" />
    <!-- <meta http-equiv="refresh" content="N; url=https://nico-kun123.github.io/Portfolio/" /> -->

    <!-- FOR FACEBOOK -->
    <meta property="og:url" content="https://nico-kun123.github.io/Portfolio/" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="My Portfolio" />
    <meta
      property="og:description"
      content="My Portfolio (Frontend developer). Intern, Junior developer."
    />
    <!--
      You can generate this image URL dynamically: https://ogcdn.net/e4b8c678-7bd5-445d-ba03-bfaad510c686/v3/{site_text}/{title_text}/{image_url}/og.png
      Replace the variables in the brackets with your own values and use this URL in the image tag below this comment. Ensure values are URL encoded.
      For more information, read: https://www.opengraph.xyz/blog/how-to-implement-dynamic-open-graph-images
    -->
    <!-- TODO: При необходимости можно изменить это изображение -->
    <meta
      property="og:image"
      content="https://ogcdn.net/e4b8c678-7bd5-445d-ba03-bfaad510c686/v3/nico-kun123.github.io/My%20Portfolio/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fdocuments%2Ff1087638-f9dd-477d-b97a-7b7e86165924.jpg%3Ftoken%3DOYcR06O6a9WF47N0aeyC_eT90RuS_CPhPnmqhezxQUQ%26height%3D1063%26width%3D827%26expires%3D33240729402/og.png"
    />

    <!-- Twitter Meta Tags -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="twitter:domain" content="nico-kun123.github.io" />
    <meta property="twitter:url" content="https://nico-kun123.github.io/Portfolio/" />
    <meta name="twitter:title" content="My Portfolio" />
    <meta
      name="twitter:description"
      content="My Portfolio (Frontend developer). Intern, Junior developer."
    />
    <!--
      You can generate this image URL dynamically: https://ogcdn.net/e4b8c678-7bd5-445d-ba03-bfaad510c686/v3/{site_text}/{title_text}/{image_url}/og.png
      Replace the variables in the brackets with your own values and use this URL in the image tag below this comment. Ensure values are URL encoded.
      For more information, read: https://www.opengraph.xyz/blog/how-to-implement-dynamic-open-graph-images
    -->
    <!-- TODO: При необходимости можно изменить это изображение -->
    <meta
      name="twitter:image"
      content="https://ogcdn.net/e4b8c678-7bd5-445d-ba03-bfaad510c686/v3/nico-kun123.github.io/My%20Portfolio/https%3A%2F%2Fopengraph.b-cdn.net%2Fproduction%2Fdocuments%2Ff1087638-f9dd-477d-b97a-7b7e86165924.jpg%3Ftoken%3DOYcR06O6a9WF47N0aeyC_eT90RuS_CPhPnmqhezxQUQ%26height%3D1063%26width%3D827%26expires%3D33240729402/og.png"
    />
    <!-- Meta Tags Generated via https://www.opengraph.xyz -->

    <style>
      /* Импортируем шрифты из файлов */
      @font-face {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src:
          url('src/assets/fonts/opensans-russian.woff2') format('woff2'),
          url('src/assets/fonts/opensans-english.woff2') format('woff2');
      }
      *,
      *::before,
      *::after {
        font-family: 'Open Sans';
      }
    </style>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>
```

Здесь также предусмотрены теги для мессенджеров (Twitter и Facebook и других, которые поддерживают **OpenGRAPH**).

👀 **Чек-лист seo-продвижения. 12 шагов оптимизатора (взял [Отсюда](https://malevich1.ru/poshagovaya-instrukcziya-po-seo-prodvizheniyu-sajtov))**:

1. Сделать Backup для отката в случае ошибок.
2. Установить Яндекс.Метрику, **Google Analytics**.
3. Собрать семантическое ядро.
4. Провести технические работы:

   - Отредактировать указания для роботов (robots.txt), карту (sitemap.xml);
   - Устранить страничные дубли;
   - Установить каноничную страницу (canonical);
   - Оформить пагинацию;
   - Проверить исключенные страницы;
   - Просмотреть страницы, прошедшие индексацию;
   - Выявить редиректные и битые линки;
   - Проверить скорость ответа, ошибки сервера;
   - Проверить скорость страничной загрузки;
   - Оценить адаптивность дизайна, мобильную версию ресурса;
   - Проверить кроссбраузерность;
   - Ежедневно выявлять вредоносный код, вирусы;
   - Настроить основное зеркало.

5. Провести внутреннюю оптимизацию:

   - Заполнить метатеги Title, H1, Description, Keywords, атрибут Alt;
   - Привязать регион в сервисах Яндекса и Гугла;
   - Продублировать меню с помощью breadcrumbs;
   - Добавить ссылочную массу с помощью внутренней перелинковки;
   - Выявить скрытый контент;
   - Проверить текст на уникальность, ошибки орфографии и грамматики, наличие ключевиков, их количество.

6. Провести внешнюю оптимизацию:

   - Проанализировать ссылки конкурентов;
   - Просмотреть собственную ссылочную массу;
   - Проанализировать донорские сайты, анкоры.

7. Проверить коммерческие факторы:

   - Наличие сервисных страниц (инфа о компании, контакты, оплата и доставка, скидки и т.п.);
   - Реквизиты;
   - Почтовый адрес на своем домене;
   - Ссылки на свои соцсети;
   - Протокол Https.

8. Отслеживать CTR через Яндекс. При низких показателях поработать над snippet.
9. Следить за пользовательскими отказами и временем, проведенном посетителями на сайте.
10. Ежедневно контролировать фильтры Яндекса и Гугла.

### НАПИСАНИЕ ТЕСТОВ

> [!NOTE]
>
> 👀 Про тесты уже написано: [Jest](#jest) ([jest.config](#jestconfigtjs)), [Vitest] ([Vitest.config]).

### ПУБЛИКАЦИЯ НА GITHUB PAGES

Если в файле [package.json](#packagejson) есть скрипт для **deploy**, то используем её для публикации проекта.

Перед этим нужно убедиться, что:

- В папке проекта инициирован публичный git-репозиторий. Это лучше делать через расширение для VSCode.
- В файле `vite.config` нужно убедиться в том, что есть параметр настройки "base":

```js
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import pluginPurgeCss from '@mojojoejo/vite-plugin-purgecss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [pluginPurgeCss(), vue()],
  optimizeDeps: {
    include: ['vue']
  },
  base: './',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      // Кэширование и сжатие JS
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // ПЕРЕМЕННЫЕ SCSS 👀
        additionalData: '@import "@/assets/_variables.scss";'
      }
    }
  }
})
```

- Есть папка dist с билдом проекта в production (выполнить скрипт `build`). Не страшно, если эта папка указана в `.gitidnore`.

Спустя некоторое время, на странице репозитория появится раздел **"deployment"**. Там будет ссылка на опубликованный проект! 😎

❗ **Также можно сделать CI/CD, который будет автоматически публиковать проект на GitHub Pages при каждой команде push**.

Для этого нужно создать файл `.github/workflows/НАЗВАНИЕ.yml` в корне проекта:

```yml
# .github/workflows/НАЗВАНИЕ.yml

name: Сборка проекта в production и его публикация на GitHub Pages

on:
  push:
    branches: ['main']
  pull_request:
    branches: ['main']

env:
  CI: false

jobs:
  build:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    permissions:
      contents: 'read'
      id-token: 'write'
      pages: 'write'
      actions: 'write'
      checks: 'write'
      deployments: 'write'

    strategy:
      matrix:
        node-version: [18.x]

    steps:
      - name: Checkout 👀
        uses: actions/checkout@v3

      - name: Use Node.js ${{ matrix.node-version }} 👀
        uses: actions/setup-node@v3
        with:
          node-version: ${{ matrix.node-version }}
          cache: 'npm'

      - name: Install dependencies 💅
        run: |
          npm ci
          npm audit fix

      - name: Build the app 😤
        run: npm run build

      - name: Configure Git 🤢
        run: |
          git config --global user.email "${{ secrets.GIT_USER_EMAIL }}"
          git config --global user.name "${{ secrets.GIT_USER_NAME }}"
          git config --global credential.helper "store --file=~/.git-credentials"
          echo "https://${{ secrets.GH_TOKEN }}@github.com" > ~/.git-credentials

      - name: Deploy to GitHub Pages 😎
        run: |
          npx gh-pages -d dist -r https://x-access-token:${{ secrets.GH_TOKEN }}@github.com/Nico-kun123/Portfolio.git
```

`secrets.GIT_USER_EMAIL`, `secrets.GIT_USER_NAME` и `secrets.GH_TOKEN` задаются в настройках репозитория (repository secrets). Почту, имя и пароль можно узнать, используя команду:

```cmd
git config --global --list
```

`secrets.GH_TOKEN` нужно сгенерировать в настройках аккаунта (мб он уже есть у тебя).

Потом нужно в `package.json` ввести URL сайта, на котором он будет опубликован (нужно будет дописать его):

```json
"homepage": "https://nico-kun123.github.io/"
```

**Теперь при каждой операции push будет срабатывать workflow. Его результаты можно будет посмотреть в разделе "Actions" у репозитория** 😎.

---

## Дополнительно

> [!NOTE]
>
> Пока нету

---

## 👀 Полезные ссылки

**Иконки**:
<https://iconbuddy.app> (Коллекция иконок)
<https://fontawesome.com/icons> (Коллекция иконок)

**Изображения**:
<https://imagecompressor.com> (Сжатие изображений)
<https://vectormaker.co> (PNG-to-SVG Convertor)

**CSS**:
<https://cssreference.io> (CSS Reference - A free visual guide to CSS)
<http://alexvaleev.ru/cssoptimizer/> (CSS Оптимизатор)
<https://autoprefixer.github.io/ru/> (Автопрефиксер CSS)
<https://cssgradient.io> (CSS Gradient)
<https://flexbox.malven.co> (Visual cheatsheet for CSS flex)
<https://css-tricks.com/snippets/css/a-guide-to-flexbox/> (A Complete Guide to Flexbox)
<https://grid.malven.co> (Visual cheatsheet for CSS grid)
<https://css-tricks.com/snippets/css/complete-guide-grid/> (A Complete Guide to CSS Grid)
<https://cssgrid-generator.netlify.app> (Grid Generator)
<https://keyframes.app> (Create basic or complex CSS @keyframe animations with a visual timeline editor)
<https://animista.net> (Collection of ready to use CSS animations)
<https://bem-cheat-sheet.9elements.com> (BEM Naming Cheatsheet)
<https://9elements.github.io/fancy-border-radius/> (Fancy Border Radius Generator)
<> ()

**HTML**:
<https://htmlreference.io> (HTML Reference - A free guide to all HTML elements and attributes.)
<https://metatags.io> (Проверка meta-тегов: og и twitter)
<https://colorhunt.co> (Color Palettes for a website)
<https://doodad.dev/pattern-generator/> (Pattern Generator для bg)
<https://bem-cheat-sheet.9elements.com> ()

**JavaScript**:
<https://jex.im/regulex/#!flags=&re=%5E(a%7Cb)*%3F%24> (Regex Visualizer)
<https://codebeautify.org> (Code Beautify and Code Formatter For Developers - to Beautify, Validate, Minify, JSON, XML, JavaScript, CSS, HTML, Excel and more)
<https://overapi.com/javascript> (Cheatsheet)
<https://github.com/airbnb/javascript> (JavaScript Style Guide)
<> ()

**README**:
<https://readme.so/ru/editor> (Простой редактор README)

**Другое**:
<https://ray.so> (Create beautiful images of your code)
<https://devdocs.io> (Много документаций в одном месте)
<https://devhints.io> (Cheatsheets)
<https://shortcode.dev> (Cheatsheets)
<https://andreasbm.github.io/web-skills/?compact> (Полезные ссылки)
<https://frontendchecklist.io> (The Front-End Checklist)
