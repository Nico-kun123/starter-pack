# ПРОСТАЯ ФОРМА ДЛЯ СОЗДАНИЯ КЛИЕНТА (Vue + Vuelidate)

> **Примечание:** Этот проект НЕ требует постоянных обновлений кода.

> **Статус Проекта:**
> 🟥 Не Активен / Не Актуален
> 🟨 В разработке
> 🟩 Активен / Актуален.

## 📑Содержание

1. [Цели и Задачи](#-цели-и-задачи)
2. [Основная работа](#-скриншоты)
   a) [Основной файл](#форма-создания-клиента)
   b) [Поля с данными объекта валидации](#поля-с-данными-объекта-валидации)

   - [s]()
   - [s]()
   - [s]()

   c) [s]()

3. [Скриншоты](#-скриншоты)
4. [Тестирование](#-тестирование)
5. [Стек технологий](#-стек-технологий)
6. [Установка](#-установка)

---

# ❗ Цели и задачи

Целью данного проекта является вёрстка формы создания Клиента, используя Vue + Vuelidate.

Целью данной работы является укрепление знаний:

- **Typescript** (наследование классов, их свойств и методов; абстрактные классы, их свойства и методы; private и protected свойства; prototypes; Generics и Function Overloading).
- **Jest** (конфигурация и скрипты для тестирования).

Конкретных задач перед началом разработки поставлено не было.

---

# Основная работа

Основной акцент в данной работе делается на тестировании, так что этот файл по факту не имеет особой значимости.

## Форма создания клиента

ы

## Поля с данными объекта валидации

ы

---

# 📷 Скриншоты

ы

---

# ✅ Тестирование

Всего для данного проекта было создано 5 тестовых файлов:

- **1-Inheritance**. Здесь с помощью метода Jest <code>.toBeInstanceOf()</code> происходит проверка того, являются ли создаваемые объекты экземплярами соответствующих классов (здесь не проверяется класс "Pigeon").
- **2-Check Methods**. Здесь происходит проверка методов классов (здесь не проверяется класс "Pigeon").
- **3-Constructor Params**. Здесь происходит проверка создаваемых объектов. В конструктор передаются различные параметры, а тест проверяет, есть ли у созданных объектов корректные свойства (здесь не проверяется класс "Pigeon").
- **4-Properties**. Этот тест точно не из самых лучших. По задумке здесь должно происходить тестирование private и protected свойств класса "Shark" и дочернего для него класса "Baby Shark". К этим свойствам нельзя обращаться напрямую, поэтому были созданы дополнительные методы класса "Shark" для получения этих свойств (здесь не проверяется класс "Pigeon").
- **5-Generics**. Здесь внимание сфокусировано на тестировании таких концептов Typescript как дженерики и перегрузка функций. Здесь тестируются методы класса "Pigeon" и 2 функции, в которых задействованы дженерики.

❗ **Подробности для этих тестов представлены ниже.**

Для того, чтобы начать процесс тестирования, нужно запустить скрипт <code>"test"</code>.

При запуске тестов будет возможность использовать горячие клавиши для тестирования только определённых файлов и тестов:

```cmd
Watch Usage
 › Press a to run all tests.
 › Press f to run only failed tests.
 › Press o to only run tests related to changed files.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press q to quit watch mode.
 › Press Enter to trigger a test run.
```

## 1-Inheritance

Запуск теста:

```cmd
 PASS  __tests__/jest/1-Inheritance.test.ts
  Checking the inheritance of the Classes
    √ The prototypes of the Bird & Fish Classes are instances of the "Animal" Class (7 ms)
    √ Penguin and Flamingo objects are instances of the "Bird" Class
    √ Shark and BabyShark objects are instances of the "Fish" Class
    √ BabyShark object is an instance of the "Shark" Class
    √ Access the property inside the prototype of the "Animal" Class (1 ms)

Seed:        293273558
Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        2.249 s
```

## 2-Check Methods

> **Примечание**: Здесь используется <code>test.todo()</code> для обозначения тестов, которые в будущем должны быть описаны.

Запуск теста:

```cmd
  PASS  __tests__/jest/4-Properties.test.ts
  Shark and BabyShark classes
    √ Shark Class SHOULD have "privateSecret" and "protectedSecret" properties with getter methods (7 ms)
    √ BabyShark Class SHOULD have access to Shark "protectedSecret" and "privateSecret" properties (1 ms)
    ✎ todo The readonly property of the "BabyShark" Class SHOULD be readonly
    ✎ todo The private and protected properties of the "Shark" Class SHOULD be private and protected

Seed:        293273558
Test Suites: 1 passed, 1 total
Tests:       2 todo, 2 passed, 4 total
Snapshots:   0 total
Time:        2.843 s, estimated 5 s
```

## 3-Constructor Params

## 4-Properties

## 5-Generics

---

# 💻 Стек технологий

В проекте был использован следующий стек технологий:

- [HTML](https://developer.mozilla.org/ru/docs/Learn/HTML/Introduction_to_HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Vue.js](https://vuejs.org)
- [Vuelidate](https://vuelidate.js.org)
- [Git](https://git-scm.com/)
- [Sass](https://sass-lang.com/)
- [Vite.js](https://vitejs.dev)
- [gh-pages (Github Pages)](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [Typescript](https://www.typescriptlang.org)
- [Jest](https://jestjs.io/ru/)
- [ts-jest](https://www.npmjs.com/package/ts-jest)

UML-диаграмма была построена с помощью веб-сервиса: https://plantuml.com/ru/sitemap

---

# ⏬ Установка

Клонируем удалённый репозиторий на локальную машину:

```markdown
git clone https://github.com/Nico-kun123/Simple-Form-Validation--Vue-Vuelidate-
```

Устанавливаем все необходимые компоненты:

```markdown
npm install
```

Содержание <code>package.json</code>:

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

    "format": "prettier --write src/",

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

В проекте есть следующие разделы:

- **dependencies**: Это пакеты, необходимые для работы приложения.
- **devDependencies**: Это пакеты, которые нужны только для разработки и тестирования приложения. Они не будут включены в окончательную сборку приложения.

В проекте есть следующие скрипты:

- **"test"**. Запуск процесса тестирования.
- **"coverage"**. Запуск процесса тестирования с сохранением информации о тестовом покрытии данного проекта.
- **"clearCache"**. Удаляет папку с кэшем из папки с проектом.
- **"build"**. Преобразует все Typescript-файлы в Javascript-файлы.
- **"start"**. Запуск Typescript-файла <code>index.ts</code>.

- **"dev"**. Этот скрипт запускает сервер разработки Vite на локальной машине;
- **"build"**. Этот скрипт используется для сборки проекта для production. Он минимизирует и оптимизирует код для лучшей производительности в production;
- **"preview"**. Этот скрипт предназначен для предварительного просмотра собранного проекта. Он запускает сервер, который позволяет увидеть, как он будет выглядеть и работать в production;
- **"deploy"**. Этот скрипт сначала собирает проект, а затем развертывает его на "GitHub Pages".

- **"lint"**. _ESLint_ — это инструмент, помогающий анализировать написанный на JavaScript код, находить синтаксические ошибки и автоматически их исправлять, писать аккуратный код в едином стиле по определённым правилам.
- **"lint:fix"**. Ключ <code>--fix</code> говорит о том, что мы хотим исправить ошибки автоматически, а два подчёркивания -- перед ключом помогают понять терминалу, что ключ относится не к команде <code>npm run lint</code>, а к тому, что за ней скрывается — к eslint.
- **"format"**. Автоматически форматирует код, используя "Prettier".

Здесь нужно рассказать про используемые в скриптах флаги:

- **<code>--config=jest.config.js</code>**. Путь к файлу конфигурации Jest, в котором указывается где искать и как выполнять тесты. Если в конфигурации не задан rootDir, тогда каталог с конфигурационным файлом будет считаться rootDir для проекта.
- **<code>--watchAll</code>**. Режим наблюдения. Наблюдает за изменениями в файлах и перезапускает тесты, если что-то изменяется. Если необходимо перезапускать только тесты для измененных файлов, используйте флаг <code>--watch</code>. Это очень удобно 👍
- **<code>--coverage</code> (-с)**. Указывает, что следует собирать и отображать информацию о тестовом покрытии. При запуске команды будет видна таблица в консоли.
- **<code>--cache</code>**. Нужно ли использовать кэш. По умолчанию используется значение true. Отключить использование кэша можно с помощью флага <code>--no-cache</code>.
- **<code>--clearCache</code>**. Удаляет директорию с кэшом Jest и завершает процесс без запуска тестов. Опция <code>cacheDirectory</code> используется для указания директории с кэшом. Если её пропустить, Jest удалит кэш-директорию по-умолчанию. Чтобы узнать, где находится кэш-директория по умолчанию, вызовите следующую комманду: <code>jest --showConfig</code>.

❗ Подробнее про эти флаги можно почитать тут: https://jestjs.io/ru/docs/cli

Чтобы указать компилятору, какие именно файлы и папки нужно смотреть во время сборки (скрипт <code>build</code>), а какие не нужно, необходимо добавить поля <code>"files"</code>, <code>"include"</code> и <code>"exclude"</code> в файл <code>tsconfig.json</code>.

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

---

## Автор

Кудрявцев Николай (Электронная почта: nicolay.kudryavtsev@gmail.com)
