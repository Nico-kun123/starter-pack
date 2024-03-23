# ТЕСТИРОВАНИЕ НАСЛЕДОВАНИЙ КЛАССОВ, ИХ СВОЙСТВ И МЕТОДОВ (Typescript + Jest)

> **Примечание:** Этот проект не является сайтом. С помощью скриптов нужно запускать основной файл и тестовые файлы.

> **Статус Руководства:** 🟩 Актуален.

## 📑Содержание

1. [Цели и Задачи](#-цели-и-задачи)
2. [Основная работа](#основная-работа)
   a) [Основной файл (index.ts)](#основной-файл-indexts)
   b) [Тестовые файлы](#тестовые-файлы)
   - [1-Inheritance](#1-inheritance)
   - [2-Check Methods](#2-check-methods)
   - [3-Constructor Params](#3-constructor-params)
   - [4-Properties](#4-properties)
   - [5-Generics](#5-generics)

   c) [Тестовое покрытие проекта](#тестовое-покрытие-проекта)

4. [Стек технологий](#-стек-технологий)
5. [Установка](#-установка-и-настройка)

---

# ❗ Цели и задачи

Целью данной работы является укрепление знаний:

- **Typescript** (наследование классов, их свойств и методов; абстрактные классы, их свойства и методы; private и protected свойства; prototypes; Generics и Function Overloading).
- **Jest** (конфигурация и скрипты для тестирования).

Конкретных задач перед началом разработки поставлено не было.

---

# Основная работа

В работе предусмотрена следующая иерархия классов:

![Иерархия классов в данной работе](https://www.plantuml.com/plantuml/png/jLLTJjj047xVKup22uWc1uXGeQYYJrH8v0ABFOvNsBkMTmn2fHAaug5IVzIg3tth5MX5fAejS8Nr5Ng27g5ZEq6ROb3JAegITRxlcvbl9l5umvBCgKWJ8UIUfLm6144YhONE8wrIcNJWcG1O1IrJx0Chb1xMG9GejEjzs3CcGQdX60eTOgGqXZLl3rLw7p-8SIStPEWemssqLWvntIlGxTQg6rCeoIwlU0AF6o8zPNjCtugt94a5asCRAJPXcumpWDAHyRZdjoUogV9mEezUh_V_BdtQClBlrhQKZHTdBUCYyLtiOInfmEzjbDh-VGTJuubC6J5jvbiyjrkzStYPiJYtfHtKmqBfnJYIMYP7LjdvNQaXcWMPih7CgOqm1vWdHePRXGv86RsiT5RGOqco3uNUr-PGhxGAdw36N0LsRV3GZndCs_KkEzl_esd8SdKW2NSno96yX4lC6CA0CFGuhzZCr6ogaja1BLLUTcPJp4wb5lZLv_uPD-NU4Ioig-PoTSvbqcnwM3lkTg7QSJD0jLc4gE39zyaDwq6J6yP7wZ-h45LmZJGjY_gp0Vn92A4D8IGO4PW8clBzVkU-PqH70BG9El3pv0EKhykHks99UUgk-FMvVEd6xj9zTUC7uBwvguekJvWP0vClt8KRbwDAVyReUQKiH-MhyhHy2-uBk6j6cvWHvxXsOm5Lck_kd2MdxlpcSTaJ5VCUt6NvpltWWnLdNEQYJiZfMXprcrQKXL2I13ujcHn3K1eeHiYcBRBEH3NKL9ji_r-VFhxf2DGXL6CKOeClYpJv3G00)

Обозначения:
- **Стрелочки** — наследование классов.
- **Зелёные значки 🟢** — public методы и свойства.
- **Красные значки 🟥** — private методы и свойства.
- **Жёлтые значки 🟨** — protected методы и свойства.
- **Буква "A" у названия класса** — абстрактный класс.

В качестве инструмента для тестирования был выбран [Jest](https://jestjs.io/ru/). Для того, чтобы использовать Jest вместе с Typescript необходимо дополнительно установить пакеты <code>ts-jest</code> и <code>@types/jest</code>:

```cmd
npm i -D jest ts-jest @types/jest
```

Конфигурация Jest (jest.config.js):
```javascript
//! Description: Jest configuration file.
//* Link: https://jestjs.io/docs/configuration
module.exports = {
  // Пресет для тестов
  preset: "ts-jest",

  // Среда для тестов
  testEnvironment: "node",
  // Паттерн для поиска тестов
  testMatch: ["**/__tests__/jest/*.[jt]s?(x)"],

  // Трансформеры для тестов (преобразует файлы в js)
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },

  // Папка для отчетов о покрытии
  coverageDirectory: "./__tests__/jest/Test Coverage",
  // Папка для кэша
  cacheDirectory: "./__tests__/jest/cache",

  // Количество потоков для тестов
  workerThreads: true,
  showSeed: true,
};
```

Здесь используются параметры настройки <code>preset</code> и <code>transform</code> для преобразования файлов Typescript в файлы Javascript, чтобы Jest мог с ними работать.

## Основной файл (index.ts)

Для того, чтобы Typescript-файл мог запускаться прямо в Node.js без какой-либо предварительной компиляции в Javascript, нужно установить дополнительный пакет <code>ts-node</code>:

```cmd
npm i -D ts-node
```

В файле <code>index.ts</code> происходит:
- Импорт классов и функций.
- Создание объектов классов. Эти объекты помещаются в набор (Set).
- С помощью метода <code>.forEach()</code> в консоли выводятся сообщения, соответствующие данным объектам.

Данный файл можно запустить, используя скрипт <code>"start"</code>. Пример вывода результатов в консоли:

```cmd
...

"Hey! I'm Skipper the penguin! 🐧"     
I'm eating fish and krill!
About me:
  - I cannot fly!
  - I can swim!
  - I can sing! 🎵
  - I can ask Kawalsky for analysis! 🐧

What can I do that's special?
I can do this: 🎶
...and also this: "Kawalsky, analysis! 🐧"

...

"Grrrr! I'm Nemo the shark! 🦈"
I'm eating fish and I don't feel bad about it! 😈
About me:
  - I cannot fly!
  - I can swim!
  - I can splash! 🌊
  - I can smile! 😁
...and you know what that means? 🐟

What can I do that's special?
I can do this: 🌊
...and also this: 😁
```

Основной акцент в данной работе делается на тестировании, так что этот файл по факту не имеет особой значимости.

## Тестовые файлы

Всего для данного проекта было создано 5 тестовых файлов:

- **1-Inheritance**. Здесь с помощью метода Jest <code>.toBeInstanceOf()</code> происходит проверка того, являются ли создаваемые объекты экземплярами соответствующих классов (здесь не проверяется класс "Pigeon"). Также здесь тестируется прототипное наследование (поверхностно).
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

### 1-Inheritance

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

### 2-Check Methods

Запуск теста:

```cmd
 PASS  __tests__/jest/2-Check Methods.test.ts
  Checking general methods of the Classes:
    √ Methods of the "Penguin" Class (7 ms)
    √ Methods of the "Flamingo" Class (1 ms)
    √ Methods of the "Shark" Class
    √ Methods of the "BabyShark" Class (1 ms)
  Checking unique methods of the Classes:
    √ Methods of the "Penguin" Class
    √ Methods of the "Flamingo" Class
    √ Methods of the "Shark" Class (2 ms)
    √ Methods of the "BabyShark" Class
  Checking the static method of the "Animal" Class:
    √ ".staticMethod()" method (1 ms)
  Method ".info()" for Different Classes:
    √ ".info()" method (Penguin)
    √ ".info()" method (Flamingo) (1 ms)
    √ ".info()" method (Shark)
    √ ".info()" method (BabyShark)

Seed:        293273558
Test Suites: 1 passed, 1 total
Tests:       13 passed, 13 total
Snapshots:   0 total
Time:        2.31 s, estimated 5 s
```

### 3-Constructor Params

Запуск теста:

```cmd
 PASS  __tests__/jest/3-Constructor Params.test.ts
  Sending additional parameters to the constructor (Penguin Class):
    √ new Penguin (CAN swim, CAN'T fly) [DEFAULT PARAMS] (9 ms)
    √ new Penguin (CAN swim, CAN fly) (1 ms)
    √ new Penguin (CAN'T swim, CAN fly)
    √ new Penguin (CAN'T swim, CAN'T fly)
  Sending additional parameters to the constructor (Flamingo Class):
    √ new Flamingo (CAN'T swim, CAN fly) [DEFAULT PARAMS] (1 ms)
    √ new Flamingo (CAN'T swim, CAN fly) (1 ms)
    √ new Flamingo (CAN'T swim, CAN'T fly)
    √ new Flamingo (CAN swim, CAN fly)
  Sending additional parameters to the constructor (Shark Class):
    √ new Shark (CAN swim, CAN'T fly) [DEFAULT PARAMS] (1 ms)
    √ new Shark (CAN swim, CAN fly)
    √ new Shark (CAN'T swim, CAN fly) (1 ms)
    √ new Shark (CAN'T swim, CAN'T fly)
  Sending additional parameters to the constructor (BabyShark Class):
    √ new BabyShark (CAN swim, CAN'T fly) [DEFAULT PARAMS]
    √ new BabyShark (CAN swim, CAN fly)
    √ new BabyShark (CAN'T swim, CAN fly)
    √ new BabyShark (CAN'T swim, CAN'T fly) (1 ms)

Seed:        293273558
Test Suites: 1 passed, 1 total
Tests:       16 passed, 16 total
Snapshots:   0 total
Time:        2.575 s, estimated 5 s
```

### 4-Properties

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

### 5-Generics

Запуск теста:

```cmd
 PASS  __tests__/jest/5-Generics.test.ts
  Testing generics and function overloading on the "Pigeon" Class:
    √ Methods of the "Pigeon" Class (Briefly) (15 ms)
    √ The "overloadFunction" method of the "Pigeon" Class SHOULD return a the type of the input data (Only "string" and "number" types are supported!) (1 ms)
    √ The "overloadFunctionGenerics" method of the "Pigeon" Class SHOULD return a the type of the input data (Supports ALL types!)
  Testing other functions:
    √ Testing the "getPigeonKeys" function (1 ms)
    √ Testing the "getLength" function (1 ms)

Seed:        293273558
Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        2.122 s, estimated 5 s
```

## Тестовое покрытие проекта

> **Покрытие кода** — это то, какой процент кода в данный момент покрыт unit-тестами.

При запуске скрипта <code>coverage</code> в консоли будет отображена следующая таблица:

```cmd
 PASS  __tests__/jest/3-Constructor Params.test.ts (5.052 s)
 PASS  __tests__/jest/5-Generics.test.ts (5.111 s)
 PASS  __tests__/jest/2-Check Methods.test.ts (5.21 s)
 PASS  __tests__/jest/4-Properties.test.ts (5.236 s)
 PASS  __tests__/jest/1-Inheritance.test.ts
----------------|---------|----------|---------|---------|-------------------
File            | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------------|---------|----------|---------|---------|-------------------
All files       |   98.52 |    88.88 |   97.67 |   98.48 |                   
 Birds          |     100 |      100 |     100 |     100 |                   
  Flamingo.ts   |     100 |      100 |     100 |     100 |                   
  Penguin.ts    |     100 |      100 |     100 |     100 |                   
 Fishes         |     100 |      100 |     100 |     100 |                   
  Baby Shark.ts |     100 |      100 |     100 |     100 |                   
  Shark.ts      |     100 |      100 |     100 |     100 |                   
 Generics       |   92.85 |      100 |      90 |   91.66 |                   
  Gererics.ts   |   92.85 |      100 |      90 |   91.66 | 77                
 Parent Classes |     100 |       75 |     100 |     100 |                   
  Animal.ts     |     100 |       75 |     100 |     100 | 40,47             
  Bird.ts       |     100 |      100 |     100 |     100 |                   
  Fish.ts       |     100 |      100 |     100 |     100 |                   
----------------|---------|----------|---------|---------|-------------------

Seed:        652643719
Test Suites: 5 passed, 5 total
Tests:       2 todo, 41 passed, 43 total
Snapshots:   0 total
Time:        6.657 s, estimated 10 s    
Ran all test suites.
```

---

# 💻 Стек технологий

В проекте был использован следующий стек технологий:

- [Typescript](https://www.typescriptlang.org)
- [Jest](https://jestjs.io/ru/)
- [ts-jest](https://www.npmjs.com/package/ts-jest)
- [Git](https://git-scm.com/)

UML-диаграмма была построена с помощью веб-сервиса: https://plantuml.com/ru/sitemap

---

# ⏬ Установка и настройка

Клонируем удалённый репозиторий на локальную машину:

```markdown
git clone https://github.com/Nico-kun123/Jest-and-Typescript
```

Устанавливаем все необходимые компоненты:

``` markdown
npm install
```

Содержание <code>package.json</code>:

```json
{
  "name": "stuff2test",
  "version": "1.0.0",
  "description": "",
  "main": "index.ts",
  "homepage": "https://github.com/Nico-kun123/Jest-and-Typescript",
  "scripts": {
    "test": "jest --config=jest.config.js --watchAll --cache",
    "coverage": "jest --config=jest.config.js --coverage --watchAll --cache",
    "clearCache": "jest --clearCache",
    "build": "tsc",
    "start": "ts-node index.ts"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
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
