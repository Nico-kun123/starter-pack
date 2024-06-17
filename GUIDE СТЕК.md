# Упрощение разработки проектов для тех, кому лень 😴

> [!NOTE]
>
> **Статус руководства:** 🟩 Актуален.

## 📑Содержание

1. [Стек разработки](#-стек-разработки) 👀
   a) Общие вещи

   - [HTML](#html)
   - [CSS](#css)
   - [Sass (scss)](#sass-scss)
   - [Javascript](#javascript)

   b) [ESLint](#eslint)
   c) [dotenv](#dotenv)
   d) [Typescript](#typescript)

   - [Vue + Typescript](#vue--typescript)
   - [React + Typescript](#react--typescript)

   e) [Vue.js](#vuejs)

   - [Советы для разработке на Vue](#советы-для-разработке-на-vue)
   - [Vuelidate](#vuelidate)
   - [Pinia](#pinia)

   f) [Nuxt.js](#nuxtjs)

   - [nuxt assets](#nuxt-assets)
   - [nuxt components](#nuxt-components)
   - [nuxt composables](#nuxt-composables)
   - [nuxt layouts](#nuxt-layouts)
   - [nuxt middleware](#nuxt-middleware)
   - [nuxt pages](#nuxt-pages)
   - [nuxt plugins](#nuxt-plugins)
   - [nuxt public](#nuxt-public)
   - [nuxt server](#nuxt-server)

   g) [React.js](#reactjs)

   - [Useful Libraries](#useful-react-libraries)

   h) [Jest](#jest)

   - [ts-jest](#ts-jest)
   - [Работа с Jest](#работа-с-jest)
   - [Покрытие тестами](#покрытие-тестами)
   - [Snapshots](#snapshots)
   - Expect
   - Mock-функции
   - Объект Jest

   i) [Vite.js](#vitejs)

   - [Чистый Javascript/Typescript](#чистый-javascripttypescript)
   - [Express.js + Vite](#expressjs--vite)
   - [Vue.js + Vite](#vuejs--vite)
   - [React.js + Vite]
   - [Доп. настройки](#доп-настройки)

   j) [Docker](#docker)
   k) [PostgreSQL](#postgresql)

   - [VIEW](#views)
   - [CASES](#cases)
   - [FUNCTIONS](#functions)
   - [TRIGGERS](#triggers)
   - [USERS AND PRIVILEGES](#users-and-privileges)
   - [DATA DUMP](#data-dump)
   - [PROCEDURES](#procedures)

   l) [Axios]

2. [Дополнительно](#дополнительно)
3. [Полезные ссылки](#-полезные-ссылки)

<!-- 2. [Во время разработки](#-скриншоты)
   - [Форма создания клиента](#форма-создания-клиента)
   - [Поля с данными объекта валидации](#поля-с-данными-объекта-валидации)
3. [Технологии](#-технологии)
4. [Установка](#-установка) -->

---

## 💻 Стек разработки

Здесь у меня представлены небольшие подсказки насчёт различных технологий. Также представлены команды по установке необходимых пакетов.

### HTML

> [!NOTE]
>
> 👀 Методология БЭМ (<https://ru.bem.info/methodology/quick-start/>)

**БЭМ (Блок, Элемент, Модификатор)** — компонентный подход к веб-разработке. В его основе лежит принцип разделения интерфейса на независимые блоки. Он позволяет легко и быстро разрабатывать интерфейсы любой сложности и повторно использовать существующий код, избегая «Copy-Paste».

😍 У БЭМ есть несколько преимуществ:

- новые разработчики могут быстро понять связь между компонентами в разметке и CSS;
- методология способствует повышению производительности в команде. Преимущества особенно заметны в крупных проектах;
- система именования снижает риски коллизий с классами и утечку стилей;
- CSS несильно привязан к разметке в определенном месте на странице;
- CSS становится повторно используемым.

❗ **БЛОК** (Функционально независимый компонент страницы, который может быть повторно использован. В HTML блоки представлены атрибутом class).

Особенности:

- Название блока характеризует смысл («что это?» — «меню»: menu, «кнопка»: button), а не состояние («какой, как выглядит?» — «красный»: red, «большой»: big).
- Блок не должен влиять на свое окружение, т. е. блоку не следует задавать внешнюю геометрию (в виде отступов, границ, влияющих на размеры) и позиционирование.
- В CSS по БЭМ также не рекомендуется использовать селекторы по тегам или id.

❗ **ЭЛЕМЕНТ** (Составная часть блока, которая не может использоваться в отрыве от него).

Особенности:

- Название элемента характеризует смысл («что это?» — «пункт»: item, «текст»: text), а не состояние («какой, как выглядит?» — «красный»: red, «большой»: big).
- Структура полного имени элемента соответствует схеме: имя-блока**имя-элемента. Имя элемента отделяется от имени блока двумя подчеркиваниями (**).

```html
<!-- Блок `search-form` -->
<form class="search-form">
  <!-- Элемент `input` блока `search-form` -->
  <input class="search-form__input" />
  <!-- Элемент `button` блока `search-form` -->
  <button class="search-form__button">Найти</button>
</form>
```

Принципы работы с элементами:

- Вложенность
- Принадлежность
- Необязательность

**ВЛОЖЕННОСТЬ**:

- Элементы можно вкладывать друг в друга.
- Допустима любая вложенность элементов.
- Элемент — всегда часть блока, а не другого элемента. Это означает, что в названии элементов нельзя прописывать иерархию вида block**elem1**elem2.

✅ Верно:

```html
<!--
    Верно. Структура полного имени элементов соответствует схеме:
    `имя-блока__имя-элемента`
-->
<form class="search-form">
  <div class="search-form__content">
    <input class="search-form__input" />
    <button class="search-form__button">Найти</button>
  </div>
</form>
```

❌ Неверно:

```html
<!--
    Неверно. Структура полного имени элементов не соответствует схеме:
    `имя-блока__имя-элемента`
-->
<form class="search-form">
  <div class="search-form__content">
    <!--
      Рекомендуется:
      `search-form__input` или `search-form__content-input`
    -->
    <input class="search-form__content__input" />

    <!--
      Рекомендуется:
      `search-form__button` или `search-form__content-button`
    -->
    <button class="search-form__content__button">Найти</button>
  </div>
</form>
```

**ПРИНАДЛЕЖНОСТЬ**:

Элемент — всегда часть блока и не должен использоваться отдельно от него.

✅ Верно:

```html
<!-- Верно. Элементы лежат внутри блока `search-form` -->
<!-- Блок `search-form` -->
<form class="search-form">
  <!-- Элемент `input` блока `search-form` -->
  <input class="search-form__input" />

  <!-- Элемент `button` блока `search-form` -->
  <button class="search-form__button">Найти</button>
</form>
```

❌ Неверно:

```html
<!-- Неверно. Элементы лежат вне контекста блока `search-form` -->
<!-- Блок `search-form` -->
<form class="search-form"></form>

<!-- Элемент `input` блока `search-form` -->
<input class="search-form__input" />

<!-- Элемент `button` блока `search-form` -->
<button class="search-form__button">Найти</button>
```

**НЕОБЯЗАТЕЛЬНОСТЬ**:

Элемент — необязательный компонент блока. Не у всех блоков должны быть элементы.

✅ Верно:

```html
<!-- Блок `search-form` -->
<div class="search-form">
  <!-- Блок `input` -->
  <input class="input" />

  <!-- Блок `button` -->
  <button class="button">Найти</button>
</div>
```

👀 **МОДИФИКАТОР**:

Сущность, определяющая внешний вид, состояние или поведение блока либо элемента.

Типы модификаторов:

**Булевый**

1. Используют, когда важно только наличие или отсутствие модификатора, а его значение несущественно. Например, «отключен»: disabled. Считается, что при наличии булевого модификатора у сущности его значение равно true.
2. Структура полного имени модификатора соответствует схеме:

   - **имя-блока_имя-модификатора**.
   - **имя-блока\_*имя-элемента*имя-модификатора**.

```html
<!-- Блок `search-form` имеет булевый модификатор `focused` -->
<form class="search-form search-form_focused">
  <input class="search-form__input" />

  <!-- Элемент `button` имеет булевый модификатор `disabled` -->
  <button class="search-form__button search-form__button_disabled">Найти</button>
</form>
```

**Ключ-значение**

1. Используют, когда важно значение модификатора. Например, «меню с темой оформления islands»: menu_theme_islands.
2. Структура полного имени модификатора соответствует схеме:

   - **имя-блока*имя-модификатора*значение-модификатора**;
   - **имя-блока\_*имя-элемента*имя-модификатора_значение-модификатора**.

```html
<!-- Блок `search-form` имеет модификатор `theme` со значением `islands` -->
<form class="search-form search-form_theme_islands">
  <input class="search-form__input" />

  <!-- Элемент `button` имеет модификатор `size` со значением `m` -->
  <button class="search-form__button search-form__button_size_m">Найти</button>
</form>

<!--
  Невозможно одновременно использовать два одинаковых модификатора
  с разными значениями
-->
<form
  class="search-form
             search-form_theme_islands
             search-form_theme_lite"
>
  <input class="search-form__input" />

  <button
    class="search-form__button
                 search-form__button_size_s
                 search-form__button_size_m"
  >
    Найти
  </button>
</form>
```

### CSS

> [!NOTE]
>
> 👀 Методология БЭМ (<https://ru.bem.info/methodology/css/>)

В БЭМ не используют селекторы тегов и идентификаторов. Стили блоков и элементов описываются через селекторы классов.

Селекторы:

```html
<!--
  `header__button` — элемент блока `header`;
  `button` — блок;
  `button_theme_islands` — модификатор.
-->
<button class="button button_theme_islands button_active">...</button>

<style>
  /* Нужно стараться использовать простые селекторы классов */
  .button {
  }
  .button__icon {
  }
  .button__text {
  }
  .button_theme_islands {
  }
  .button_active {
  }
</style>
```

**Модификаторы**:

Модификаторами в БЭМ задают блокам внешний вид, состояние и поведение. Изменение оформления блока производится при помощи установки/снятия модификатора.

Пример:

```html
<button class="button button_size_s">...</button>

<style>
  .button {
    font-family: Arial, sans-serif;
    text-align: center;
  }

  .button_size_s {
    font-size: 13px;
    line-height: 24px;
  }

  .button_size_m {
    font-size: 15px;
    line-height: 28px;
  }
</style>
```

**Стилизация групп блоков**:

Иногда необходимо применить одинаковое форматирование сразу к нескольким различным HTML-элементам веб-страницы. Обычно для решения подобных задач применяют групповые селекторы.

Пример:

```html
<!-- ❌ПЛОХО -->
<article class="article">...</article>
<footer class="footer">
  <div class="copyright">...</div>
</footer>
<style>
  .article,
  .footer div {
    font-family: Arial, sans-serif;
    font-size: 14px;
    color: #000;
  }
</style>

<!-- ✅ХОРОШО -->
<article class="article text">...</article>
<footer class="footer">
  <div class="copyright text">...</div>
</footer>
<style>
  .text {
    font-family: Arial, sans-serif;
    font-size: 14px;
    color: #000;
  }
</style>
```

Про БЭМ всё.

> [!TIP]
>
> Дальше идут советы всякие 👀

1. Отступы margin и padding отсчитываются по часовой стрелке:

```css
.no {
  padding-top: 1px;
  padding-right: 2px;
  padding-bottom: 3px;
  padding-left: 4px;
}
.yes {
  padding: 1px 2px 3px 4px;
}
.another {
  padding: 2px 4px; /* padding: 2px 4px 2px 4px; (ПОВТОРИЛ ПАРАМЕТРЫ) */
  padding: 2px 4px 6px; /* padding: 2px 4px 6px 4px; (среднее значение для левого и правого края) */
}
```

Обнаружение сенсорных устройств:

```css
@media (any-pointer: fine) {
  /*
    These rules will be applied to not-touchscreen devices
  */
}

@media (any-pointer: coarse) {
  /*
    These rules will be applied to touchscreen devices only
  */
}
```

Ориентация экрана:

```css
@media (orientation: landscape) {
  /* При горизонтальной ориентации фоновым цветом сайта будет белый */
  body {
    background: #fff;
  }
}

@media (orientation: portrait) {
  /* При вертикальной ориентации фоновым цветом сайта будет чёрный */
  body {
    background: #000;
  }
}
```

Для адаптивности нужно в конце CSS файла добавить:

```css
/* Desktop First */
@media (max-width: 1200px) {
}
@media (max-width: 1024px) {
}
@media (max-width: 768px) {
}
@media (max-width: 580px) {
}
@media (max-width: 450px) {
}
@media (max-width: 320px) {
}

/* Mobile First (Предпочтение 😎) */
@media (min-width: 320px) {
}
@media (min-width: 450px) {
}
@media (min-width: 580px) {
}
@media (min-width: 768px) {
}
@media (min-width: 1024px) {
}
@media (min-width: 1200px) {
}
```

**ДОПОЛНИТЕЛЬНО**:
Также про <code>@font-face</code> и <code>font-display</code>я рассказывал в разделе "[В конце разработки](./GUIDE.md/#в-конце-разработки)" (про оптимизацию шрифтов). Хотя стили лучше импортировать прямо в HTML файл.

### Sass (scss)

Препроцессор CSS, который позволит запихивать одни селекторы в другие, чтобы всё выглядело нагляднее и красивее.

Установка Sass:

```cmd
npm -D add sass
```

В файл <code>package.json</code> можно добавить следующие скрипты:

```json
"scripts": {
  "sass-dev": "sass --watch --update --style=expanded assets/scss:assets/css",
  "sass-prod": "sass --no-source-map --style=compressed assets/scss:assets/css"
}
```

Структура проекта (пример):

```cmd
sass-compile/
├── assets/
│   ├── css/
│   │   └── main.css
│   └── scss/
│       ├── assets/
│       │   ├── _footer.scss
│       │   └── _header.scss
│       └── main.scss
├── node-modules/
└── package.json
```

Sass помогает запихивать одни селекторы в другие, чтобы не повторяться (и чтобы читаемость улучшилась):

```scss
#main {
  width: 97%;
  p,
  div {
    font-size: 2em;
    a {
      font-weight: bold;

      // Символ & будет заменен на родительский селектор
      &:hover {
        text-decoration: underline;
      }
    }
  }
  pre {
    font-size: 3em;
  }
}
```

Также можно по-другому создавать переменные:

```scss
$main-padding: 15px;
// ...
.sth {
  padding: $main-padding;
}
```

Некоторые **комментарии могут исчезнуть** при компиляции из Sass в CSS:

```scss
/* Этот коммент НЕ ИСЧЕЗНЕТ */

// А этот исчезнет, потому что CSS такие комменты не поддерживает
```

Есть ещё такое понятие, как **Mixins (примеси)**. Замысловатый пример:

```scss
/* есть значение по умолчанию для 2го параметра */
@mixin sexy-border($color, $width: 1in) {
  border: {
    color: $color;
    width: $width;
    style: dashed;
  }
}
p {
  @include sexy-border(blue);
}
h1 {
  @include sexy-border(blue, 2in);
}
```

👀 Если используется Vue, то не нужно делать компиляцию из Sass в CSS. Достаточно просто в теге <code>style</code> у компонента указать атрибут <code>lang="scss"</code>.

Если нужно использовать SCSS-переменные в отдельном файле, то для этого нужно сделать несколько шагов:

- Создать отдельный файл <code>\_variables.scss</code>:

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

- Импортировать это в файл <code>base.scss</code>, а его потом в файл <code>main.scss</code>:

```scss
// base.scss
@use 'variables' as vars;

*,
*::before,
*::after {
  font-family: vars.$font-family;
  line-height: vars.$line-height;
  transition: vars.$animation-duration;
  // ...
}

// main.scss
@import './base.scss';
```

- Импортировать <code>main.scss</code> в <code>main.ts</code>:

```ts
// main.ts
import './assets/main.scss'
// ...
```

- Добавить конфигурацию для CSS и SCSS в файл <code>vite.config.js</code>:

```js
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    include: ['vue']
  },
  base: './',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
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

### Javascript

Я не знаю, о чём здесь можно особо сказать. Так что поговорю о:

- Замыкания.
- Генераторы.
- Промисы (обработка ошибок внутри then)
- Прототипное наследование

**Замыкание** — это функция, у которой есть доступ к области видимости, сформированной внешней по отношению к ней функции даже после того, как эта внешняя функция завершила работу. Это значит, что в замыкании могут храниться переменные, объявленные во внешней функции и переданные ей аргументы

Пример:

```js
function getCounter() {
  let counter = 0
  return function () {
    return counter++
  }
}
let count = getCounter()
console.log(count()) // 0
console.log(count()) // 1
console.log(count()) // 2
```

Пример генератора:

```js
function* idMaker() {
  let index = 0
  while (true) yield index++
}

let gen = idMaker() // "Generator { }"

console.log(gen.next().value) // 0
console.log(gen.next().value) // 1
console.log(gen.next().value) // 2
// ...
```

Пример Promise:

```js
let promise = new Promise((resolve, reject) => {
  // эта функция выполнится автоматически, при вызове new Promise

  // через 1 секунду сигнализировать, что задача выполнена с результатом "done"
  setTimeout(() => resolve('done'), 1000)
})

// resolve запустит первую функцию, переданную в .then
promise
  .then(
    (result) => alert(result), // выведет "done!" через одну секунду
    (error) => alert(error) // не будет запущена
  )
  .catch(alert)
  .finally(() => alert('Promise завершён')) // срабатывает первым;
  .then(function (result) {
    // (**)
    alert('Not done 🤪')
  })
```

Promise.all, Promise.allSettled, Promise.race, Promise.any:

```js
// Если любой из промисов завершится с ошибкой, то промис,
//  возвращённый Promise.all, немедленно завершается с этой ошибкой.
Promise.all([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error('Ошибка!')), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).catch(alert) // Error: Ошибка!

// Метод Promise.allSettled всегда ждёт завершения всех промисов
// Эта возможность была добавлена в язык недавно
let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://no-such-url'
]
Promise.allSettled(urls.map((url) => fetch(url))).then((results) => {
  // (*)
  results.forEach((result, num) => {
    if (result.status == 'fulfilled') {
      alert(`${urls[num]}: ${result.value.status}`)
    }
    if (result.status == 'rejected') {
      alert(`${urls[num]}: ${result.reason}`)
    }
  })
})

// Ждёт только первый выполненный промис, из которого
//  берёт результат (или ошибку).
Promise.race([
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
  new Promise((resolve, reject) => setTimeout(() => reject(new Error('Ошибка!')), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(alert) // 1

// Ждёт только первый успешно выполненный промис, из
//  которого берёт результат
Promise.any([
  new Promise((resolve, reject) => setTimeout(() => reject(new Error('Ошибка!')), 1000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(1), 2000)),
  new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(alert) // 1
```

У объекта promise, возвращаемого конструктором new Promise, есть внутренние свойства (но мы не имеем к ним прямого доступа):

- **state** («состояние») — вначале "pending" («ожидание»), потом меняется на "fulfilled" («выполнено успешно») при вызове resolve или на "rejected" («выполнено с ошибкой») при вызове reject.
- **result** («результат») — вначале undefined, далее изменяется на value при вызове resolve(value) или на error при вызове reject(error).

Сортировка числовых массивов:

```js
;[0, 10, 4, 9, 123, 54, 1].sort((a, b) => a - b) // [0, 1, 4, 9, 10, 54, 123]
```

### Typescript

Чтобы установить TypeScript необходимо выполнить в консоли команду:

```cmd
npm i typescript
```

Если нужно установить Typescript глобально, то это можно сделать с помощью команды:

```cmd
npm i -g typescript
```

❗ **Важно**: версии TypeScript могут сильно отличаться друг от друга, даже если речь идет о минорных релизах. Поэтому **TypeScript лучше устанавливать локально**!

Для проверки версии TypeScript необходимо ввести команду:

```cmd
tsc -v
```

После установки Typescript в свой проект необходимо создать файл <code>tsconfig.json</code>. Подробно про его настройку я писал в разделе [tsconfig.json](./GUIDE.md/#tsconfigjson)

Для того, чтобы Typescript-файл мог запускаться прямо в Node.js без какой-либо предварительной компиляции в Javascript, нужно установить дополнительный пакет <code>ts-node</code>:

```cmd
npm i -D ts-node
```

#### Vue + Typescript

Vue уже написан на TypeScript.

Чтобы обозначить, что в компоненте используется TypeScript, нужно просто добавить атрибут <code>lang</code> в тег "script":

```js
<script setup lang="ts">
  // ...
</script>
```

При установке проекта, используя команду <code>npm create vite@latest</code>, будет показаны шаги по первоначальной настройке. Также в проект будут добавлены все необходимые файлы.

#### React + Typescript

> [!IMPORTANT]
>
> Не закончено!

При установке проекта, используя команду <code>npm create vite@latest</code>, будет показаны шаги по первоначальной настройке. Также в проект будут добавлены все необходимые файлы.

---

### ESLint

Установить и настроить ESLint можно следующей командой:

```cmd
npm init @eslint/config
```

После нескольких вопросов будет создан соответствующий файл **.eslintrc** в корне проекта.

В файле <code>.eslintrc.js</code> должно быть примерно следующее:

```js
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'eslint:recommended',
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {}
}
```

Теперь можно запустить ESLint для любого файла в проекте:

```cmd
npx eslint yourfile.js
```

Другой способ — npm-скрипты в <code>package.json</code>. Пример скриптов:

```json
"scripts": {
    "lint": "eslint src --ext .ts",
    "lint:all": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore",
    "lint:fix": "npm run lint -- --fix",
  }
```

Флаги:

- **ext**. Расширения файлов.
- **ignore-path**. Игнорирование пути к файлам.
- **fix**. Исправление как можно больше ошибок.

❗ Про команды и флаги подробнее написано **[здесь](https://eslint.org/docs/latest/use/command-line-interface)**.

### dotenv

> [!NOTE]
>
> ❗ Лучше всего подходит для development, а не production.

Хранит переменные среды в файле <code>.env</code>.

Сначала нужно установить **dotenv**:

```cmd
npm install dotenv --save
```

Затем нужно создать файл <code>.env</code>, который находится в корне проекта. Пример содержания файла:

```cmd
SECRET_KEY="YOURSECRETKEYGOESHERE"
```

В основном файле проекта в самом начале импортируем его:

```js
require('dotenv').config()
// или
import 'dotenv/config'
```

Всё! 👍

Доступ к переменной можно получить через <code>process.env</code>:

```js
const PORT = process.env.PORT || 3000
const express = require('express')
const app = express()

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}.`)
})

app.get('/', function (req, res) {
  res.send(`Hello ${process.env.HELLO}`)
})
```

Если нужно опубликовать такой файл в production, то лучше публиковать не <code>.env</code>, а <code>.env.vault</code> (подробнее про это написано в [официальной документации](https://www.dotenv.org/docs/security/env-vault)).

❗**dotenv + Vite**❗

> [!NOTE]
>
> 👀 Про это написано в оф. документации:
> <https://vitejs.dev/guide/env-and-mode>

Здесь доступ к переменным можно получить другим способом:

```js
console.log(import.meta.env.VITE_HELLO)
```

У Vite уже есть свои встроенные переменные:

- **import.meta.env.MODE**: {string} the mode the app is running in.
- **import.meta.env.BASE_URL**: {string} the base url the app is being served from. This is determined by the base config option.
- **import.meta.env.PROD**: {boolean} whether the app is running in production (running the dev server with NODE_ENV='production' or running an app built with NODE_ENV='production').
- **import.meta.env.DEV**: {boolean} whether the app is running in development (always the opposite of import.meta.env.PROD)
- **import.meta.env.SSR**: {boolean} whether the app is running in the server.

Скрипты также нужно будет поменять:

```json
"scripts": {
  "dev": "node -r dotenv/config ./node_modules/.bin/vite",
  "build": "tsc && node -r dotenv/config ./node_modules/.bin/vite build",
  "preview": "node -r dotenv/config ./node_modules/.bin/vite preview"
},
```

👀 Если используется **TypeScript**, то нужно также:

- Создать файл <code>env.d.ts</code> в папке <code>src</code>:

```ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
```

👀 Можно использовать эти переменные прямо в HTML коде:

```html
<h1>Vite is running in %MODE%</h1>
<p>Using data from %VITE_API_URL%</p>
```

❗ **Лучше создавать repository secrets в репозитории, если на то пошло**. 🤓

### Vue.js

Проект на Vue.js можно создать разными способами:

a) **"Vue CLI"**. Сначала нужно это установить глобально, а потом использовать его для создания vue-проектов.
b) **Vite.js**. Инструмент для сборки проектов. Есть несколько способов создания vue-проектов, используя Vite (<code>npm create vite@latest</code>):

- **Vue**. Простое создание vue-приложения с использованием JS или TS (на выбор).
- **create-vue**. Лучший вариант. Специально сделан для создания vue-проектов (можно сразу же добавить Vue-router, Pinia, ESLint, Vitest).
- **Nuxt**. Про это пока нечего сказать.

❗ Vite лучше всего (а "create-vue" ещё лучше) 👍

Нужно просто следовать инструкциям по установке, если используется Vite.

Если создать проект командой:

```cmd
npm create vue@latest
```

...то установка будет проходить также, как и при <code>npm create vite@latest</code> (Vue -> create-vue).

Ещё один способ: <code>npm create vite@latest</code> (Others -> create-vite-extra -> ssr-vue), но этот вариант не пробовал.

#### Советы для разработке на Vue

> [!NOTE]
> ❗ _Полный список рекомендаций написан здесь_:
> <https://ru.vuejs.org/v2/style-guide/index.html> (**Vue2**)
> <https://v3.ru.vuejs.org/ru/style-guide/> (**Vue3**)

Категория правил:

a) **Приоритет A: Важно**
Эти правила помогут предотвратить ошибки, поэтому изучите и соблюдайте их любой ценой. Исключения могут быть, но должны быть очень редкими и должны выполняться только теми, у кого есть хорошие знания как JavaScript, так и Vue.

b) **Приоритет B: Настоятельно рекомендуется**
Эти правила помогут улучшить читаемость и/или опыт разработки в большинстве проектов. Ваш код всё равно будет работать, если вы нарушите их, но нарушения должны быть редкими и обоснованными.

с) **Приоритет C: Рекомендуется**
Где существует множество одинаково хороших вариантов, можно сделать собственный выбор. В этих правилах мы описываем каждый приемлемый вариант и предлагаем выбор по умолчанию. Приспосабливаясь к стандартам сообщества, вы будете:

- тренировать свой мозг, чтобы легче разбираться в большинстве кода сообщества, с которым придётся столкнуться
- иметь возможность копировать и использовать большинство примеров кода сообщества без изменений
- чаще находить новых сотрудников, уже знакомых с предпочитаемым стилем кода, по крайней мере, в отношении Vue

d) **Приоритет D: Используйте с осторожностью**
Некоторые возможности Vue существуют для приспосабливания к редким крайним случаям или для обеспечения более плавной миграции старой кодовой базы. Однако при чрезмерном использовании они сделают ваш код более сложным в поддержке или могут стать источником ошибок. Эти правила освещают потенциально опасные функции, объясняя, когда и почему их следует избегать.

**❗ САМИ СОВЕТЫ ❗**

**Имена компонентов из нескольких слов (ВАЖНО)**:

Имена компонентов должны всегда состоять из нескольких слов, за исключением корневого компонента App и встроенных компонентов самого Vue, например, <code>\<transition></code> или <code>\<component></code>:

```js
// ПЛОХО
Vue.component('todo', {
  // ...
})
export default {
  name: 'Todo'
  // ...
}

// ХОРОШО
Vue.component('todo-item', {
  // ...
})
export default {
  name: 'TodoItem'
  // ...
}
```

**Свойство data компонента должно быть функцией (ВАЖНО).**

```js
// ПЛОХО
export default {
  data: {
    foo: 'bar'
  }
}

// ХОРОШО
export default {
  data() {
    return {
      foo: 'bar'
    }
  }
}
```

**❗ Полный список рекомендаций написан здесь:**
<https://ru.vuejs.org/v2/style-guide/index.html> (Vue2)
<https://v3.ru.vuejs.org/ru/style-guide/> (Vue3)

#### Vuelidate

> [!NOTE]
> 👀 Почитать подробнее про настройку Vuelidate:
> <https://vuelidate-next.netlify.app>
> 👀 Прочитать про сами валидаторы (required, email и тп):
> <https://vuelidate-next.netlify.app/validators.html>

С помощью Vuelidate можно реализовать валидацию форм.

Сначала нужно установить **Vuelidate**:

```cmd
npm install @vuelidate/core @vuelidate/validators
```

В файле <code>main.js</code> нужно дописать:

```js
// ...
import Vuelidate from 'vuelidate'
createApp(App).use(Vuelidate).mount('#app')
```

В файле компонента допишем (Vue2):

```js
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

export default {
  setup() {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      contact: {
        email: ''
      }
    }
  },
  validations() {
    return {
      firstName: { required }, // Matches this.firstName
      lastName: { required }, // Matches this.lastName
      contact: {
        email: { required, email } // Matches this.contact.email
      }
    }
  }
}
```

В файле компонента допишем (Vue2 + Composition API):

```js
import { reactive } from 'vue' // "from '@vue/composition-api'" if you are using Vue <2.7
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

export default {
  setup() {
    const state = reactive({
      firstName: '',
      lastName: '',
      contact: {
        email: ''
      }
    })
    const rules = {
      firstName: { required }, // Matches state.firstName
      lastName: { required }, // Matches state.lastName
      contact: {
        email: { required, email } // Matches state.contact.email
      }
    }

    const v$ = useVuelidate(rules, state)

    return { state, v$ }
  }
}
```

То, что я раньше писал:

```js
import { reactive, ref } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'

export default {
  name: 'App',
  methods: {
    onSubmit() {
      if (this.v$.$invalid) {
        this.v$.$touch()
        this.showError = true
        alert('Заполните корректно все обязательные поля!')
        return
      }
      alert('Клиент был успешно создан! :)')
    }
    // ...
  },
  setup() {
    const rules = {
      name: {
        required
      },
      secondName: {},
      birthday: {
        required,
        dateRange(val) {
          const minDate = new Date(1900, 1, 1)
          const maxDate = new Date()
          const date = new Date(val)
          if (date >= minDate && date <= maxDate) return true
          else throw 'Дата должна быть в диапазоне от 01.01.1900 до текущей даты'
        }
      },
      phone: {
        regex(val) {
          const regex = /^7[0-9]{10}$/
          if (regex.test(val)) return true
          else throw 'Поле обязательно для заполнения. Формат номера телефона: 11 цифр, начиная с 7'
        }
      },
      passportIssueDate: {
        required,
        dateRange(val) {
          const minDate = new Date(1900, 1, 1)
          const maxDate = new Date()
          const date = new Date(val)
          if (date >= minDate && date <= maxDate) return true
          else throw 'Дата должна быть в диапазоне от 01.01.1900 до текущей даты'
        }
      }
      // ...
    }

    const state = reactive({
      number: '',
      customerGroup: [],
      noSms: false,
      passportIssueDate: null
      // ...
    })

    const v$ = useVuelidate(rules, state)

    return {
      v$,
      state
    }
  }
}
```

Также в HTML-коде компонента нужно написать следующее (пример):

```js
<div :class="{ error: v$.firstName.$errors.length }">
  <input v-model="state.firstName">
  <div class="input-errors" v-for="error of v$.firstName.$errors" :key="error.$uid">
    <div class="error-msg">{{ error.$message }}</div>
  </div>
</div>

<!-- Альтернатива -->
<label for="birthday">Дата рождения*</label>
<input type="date" id="birthday" v-model="v$.birthday.$model" />
<div v-for="(error, index) in v$.birthday.$silentErrors" :key="index">
  <p class="error">
    {{
      error.$message == ""
        ? printError(error.$response)
        : printError(error.$message)
    }}
  </p>
</div>
```

<div align="center"> </div>

#### Vue Use

> [!NOTE]
>
> _VueUse_: <https://vueuse.org>

пока нечего сказать.

#### Pinia

пока нечего сказать.

---

### Nuxt.js

> [!NOTE]
>
> **Официальная документация**: <https://nuxt.com/docs/guide>

Есть 2 способа создать приложение Nuxt.js:

- **Через Vite**. Во время настройки проекта нужно выбрать "Vue -> Nuxt":

```cmd
npm create vite@latest
```

- Специальной командой для Nuxt:

```cmd
npx nuxi@latest
```

В файле <code>package.json</code> будут скрипты:

```json
"scripts": {
  "build": "nuxt build",
  "dev": "nuxt dev",
  "generate": "nuxt generate",
  "preview": "nuxt preview",
  "postinstall": "nuxt prepare"
},
```

В файл <code>nuxt.config.ts</code> нужно добавить:

```ts
// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'

export default defineNuxtConfig({
  // SEO
  app: {
    head: {
      title: 'Nuxt Project',
      meta: [
        {
          name: 'description',
          content: 'Some Description 🤪'
        }
      ],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1'
    }
  },

  devtools: { enabled: true },

  alias: {
    '@': resolve(__dirname, '/')
  },

  css: ['~/assets/base.scss']

  // ssr: true,
})
```

Далее нужно создавать папки для компонентов, плагинов, middleware и др. Подробнее про эти папки также написано в официальной документации: <https://nuxt.com/docs/guide/directory-structure/assets>

#### nuxt assets

Здесь хранятся стили, изображения (не favicon) и шрифты. Также здесь будет всё, что не нужно в публичной папке (public).

Тогда для импорта изображений нужно писать такой путь:

```html
<!-- Нормально импортируется -->
<img src="~/assets/1-Lone Werewolf.png" alt="img 1" />
<!-- Не находит путь -->
<img src="./assets/2-Glitch Wave.png" alt="img 2" />
```

Для того, чтобы подключить стили в Nuxt, нужно добавить в файл <code>nuxt.config.ts</code>:

```ts
export default defineNuxtConfig({
  // ...
  css: ['~/assets/base.scss']
})
```

Остальные стили подключаются в сами компоненты, как для Vue.

Не обязательно делать компиляцию SASS в CSS, потому что Nuxt его поддерживает. Всё, что нужно сделать – добавить SASS в проект:

```cmd
npm add -D sass
```

#### nuxt components

Папка для всех компонентов. Названия компонентов и папок внутри данной папки должны начинаться с заглавной буквы.

Одна из особенностей Nuxt – это то, что **не нужно постоянно импортировать компоненты**.

Например, если у нас есть компонент "Alert" в корневой части папки <code>components</code>, то для того, чтобы импортировать этот компонент куда-нибудь, нужно просто указать название:

```html
<template>
  <h1>Error!</h1>

  <!-- Не нужно импортировать ничего! Сразу использовать компонент 😍 -->
  <Alert />
</template>
```

Если бы этот компонент находился в каком-то подкаталоге <code>components/Something</code>, то тогда нужно изменить название компонента на:

```html
<template>
  <h1>Error!</h1>

  <!-- Изменённый путь -->
  <SomethingAlert />
</template>
```

Если нужно в проекте использовать SVG изображения, то рекомендую импортировать их в виде компонентов:

```html
<template>
  <svg>...</svg>
</template>

<script>
  export default {
    name: 'VscodeIconsFileTypeBun'
  }
</script>
```

Затем этот компонент добавить, как и любой другой компонент.

❗ **Одна из полезных ссылок – коллекция SVG изображений (<https://icones.js.org>)**

Если компонент в свою очередь состоит из других компонентов, то должна быть конкретная структура компонента:

```cmd
components/
└── Profile/
    ├── Header/
    │   ├── index.vue
    │   └── ...
    ├── Footer/
    │   ├── index.vue
    │   └── ...
    └── index.vue
```

Сами компоненты в этом примере:

```html
<!-- HEADER -->
<template>
  <h1>Profile Header</h1>
</template>

<!-- FOOTER -->
<template>
  <h1>Profile Footer</h1>
</template>

<!-- Profile Component -->
<template>
  <ProfileHeader />
  <h2>This is a Profile Component!</h2>
  <ProfileFooter />
</template>
```

❗ Должны быть файлы <code>index.vue</code> для каждого из этих "подкомпонентов".

#### nuxt composables

> [!NOTE]
>
> В основе этого лежит **Composition API** (ref, reactivity, provide, inject и тп), который в основном ассоциируется с Vue 3.

**Сomposable** ─ добавляет гибкости и позволяет использовать одну логику с состоянием в нескольких компонентах.

В папке <code>composables</code> создадим файл <code>useUtils.ts</code> (не обязательно так его называть). Простой пример:

```ts
export const useUtils = () => {
  const sayHi = () => 'Hi! 😍'
  return { sayHi }
}
```

Теперь внутри компонента нужно добавить:

```html
<script setup>
  // Composables
  const { sayHi } = useUtils()
</script>

<template>
  <h1>{{ sayHi() }}</h1>
  <!-- ... -->
</template>
```

Теперь функцию "sayHi" можно спокойно использовать где угодно в проекте, что сэкономит код!

#### nuxt layouts

В основном это нужно для паттернов в UI. Можно некоторые повторяющиеся компоненты UI вынести сюда для дальнейшего повторного использования.

Для того, чтобы использовать layouts, нужно первым делом изменить файл <code>app.vue</code>:

```html
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
```

Для того, чтобы указать конкретный layout, нужно сделать следующее:

```html
<script setup>
  // Указание шаблона для страницы
  definePageMeta({
    layout: 'custom'
  })
  // ...
</script>
```

В этом примере есть файл "custom.vue" в папке "layouts". Просто указываем название.

Если не указывать никакой layout, то по умолчанию будет использоваться layout <code>layouts/default.vue</code>, поэтому нужно его создать. Пример:

```html
<template>
  <div class="DefaultLayout">
    <p>Default Layout</p>
    <slot></slot>
  </div>
</template>
```

❗ Если нет необходимости использовать несколько layouts, то лучше не заморачиваться с ними вообще – просто редактировать файл "app.vue" и всё.

#### nuxt middleware

> [!NOTE]
>
> 👀 <https://nuxt.com/docs/guide/directory-structure/middleware>

Действия, которые будут выполняться автоматически при переходе на другие страницы сайта в процессе маршрутизации.

Middleware можно объявить:

- **Глобально**. Действия, которые будут распространяться при переходе на ЛЮБУЮ страницу. Такие middleware не нужно никуда импортировать, раз они глобальные. Для создания глобального middleware нужно просто назвать его <code>\*.global.ts</code>.
- **Локально**. Действия, которые будут распространяться при переходе на определённые страницы. Назвать эти файлы можно как угодно, но только без "global".

Например, если у нас есть локальный middleware **"something.vue"**, то для его применения нужно сделать следующее:

```html
<script setup>
  definePageMeta({
    middleware: 'something'
  })
  // ...
</script>
```

Пример middleware:

```ts
export default defineNuxtRouteMiddleware((to, from) => {
  if (to.params.id === '1') {
    return abortNavigation()
  }
  // In a real app you would probably not redirect every route to `/`
  // however it is important to check `to.path` before redirecting or you
  // might get an infinite redirect loop
  if (to.path !== '/') {
    return navigateTo('/')
  }
})
```

#### nuxt pages

Важно для маршрутизации.

Важно наличие файла основной страницы "index.vue". **Названия файлов для страниц пишутся маленькими буквами**.

Навигацию по страницам можно сделать, например, так:

```html
<ul class="nav">
  <li>
    <NuxtLink to="/">HOME</NuxtLink>
    <NuxtLink to="/about">ABOUT</NuxtLink>
    <!-- ... -->
  </li>
</ul>
<!-- Тоже важен этот компонент (для отображения текущей страницы) -->
<NuxtPage />
```

Можно указать динамические пути, если название файла страницы находится в квадратных скобках (например, [id].vue).

```html
<!-- index.vue -->
<template>
  <h1>Events Page</h1>
  <ul>
    <li>
      <NuxtLink to="/events/1">Event #1</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/events/2">Event #2</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/events/3">Event #3</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/events/69">Event #69 🤪</NuxtLink>
    </li>
  </ul>
</template>

<!-- [id].vue -->
<script setup>
  // Get route params in the script tags
  const route = useRoute()
</script>
<template>
  <div v-if="$route.params.id == 69">This is the Event #{{ $route.params.id }} (Nice 😎)</div>
  <div v-else>This is the Event #{{ $route.params.id }}</div>
</template>
```

Здесь **"params\.id"**, потому что файл назван **"[id].vue"**. Вместо "id" может быть и что-то другое:

```cmd
-| pages/
---| index.vue
---| users-[group]/
-----| [id].vue
```

```html
<!-- pages/users-[group]/[id].vue -->
<template>
  <p>{{ $route.params.group }} - {{ $route.params.id }}</p>
</template>
```

Если у страницы нужно поменять название вкладки, то можно попробовать сделать так:

```html
<script setup lang="ts">
  definePageMeta({
    title: 'My home page'
  })

  // Получить доступ
  const route = useRoute()
  console.log(route.meta.title) // My home page
</script>
```

Можно создать дополнительную папку, в которую можно расположить страницы. Например, если есть страница <code>pages/events/congrats.vue</code>, то адресация будет:

```html
<NuxtLink to="/events/congrats">🤪</NuxtLink>
```

#### nuxt plugins

Похож на <code>composables</code>.

В папке "plugins" создадим какой-нибудь файл "myPlugin.ts":

```ts
export default defineNuxtPlugin(() => {
  return {
    provide: {
      hello: (msg: string) => `Hello, ${msg}! 🤪`
      // ...
    }
  }
})
```

Затем можно в каком-нибудь layout или page вызвать плагин:

```html
<template>
  <!-- Плагин уже был автоматически импортирован -->
  <p>{{ $hello('someone') }}</p>
</template>
```

❗ По умолчанию Nuxt видит только плагины, расположенные в корневом каталоге "plugins":

```cmd
-| plugins/
---| foo.ts      // scanned
---| bar/
-----| baz.ts    // not scanned
-----| foz.vue   // not scanned
-----| index.ts  // currently scanned but deprecated
```

Если нужно добавить файлы из подкаталогов в проект, то нужно изменить файл <code>nuxt.config.ts</code>:

```ts
export default defineNuxtConfig({
  // ...
  plugins: ['~/plugins/bar/baz', '~/plugins/bar/foz']
})
```

#### nuxt public

Здесь хранятся статические файлы.

Примеры файлов:

- favicon.ico
- robots.txt (для SEO)
- изображения og и twitter (для красивых ссылок в мессенджерах)

```html
<script setup>
  useSeoMeta({
    ogImage: '/og-image.png'
  })
</script>
```

#### nuxt server

Здесь могут находится API, middleware, plugins для серверной части проекта. Также здесь прописывается подключение к БД + запросы к ней.

Мне тут особо нечего сказать 😑

---

### React.js

#### Useful React Libraries

> [!NOTE]
>
> 👀 **Брал отсюда**:
> <https://dev.to/ruppysuppy/7-libraries-you-should-know-as-a-react-developer-2ib5> > <https://habr.com/ru/companies/ru_mts/articles/745840/>

1. **React Joyride**. React Joyride is a library that helps you create walkthroughs and guided tours for your React apps. It is an incredible tool to showcase new features to existing users & onboarding new users to your app.
2. **React PDF Renderer**. React PDF Renderer is a library that helps you create PDF files using React components, thus making the tedious process of creating PDFs a walk in the park.
3. **React Beautiful DnD**. React Beautiful DnD is a library that helps you create drag and drop interfaces in your React apps.
4. **Material UI**. This is a library that needs no introduction. Material UI is the largest component library for React.
5. **Swiper.js**. Swiper.js, as the library name suggests, is a library that helps you create swipeable interfaces in your React apps.
6. **React Query**. React Query is a data management library which provides immense control of fetching, caching data, and error handling using simple hooks.
7. **React Spring**. React Spring is a library that helps you create eye-candy animations in your React apps, which ensures high user engagement!
8. **Formik**. Это отличная open-source-библиотека для React или React Native. Она предназначена для создания форм и выполняет три основные задачи: управление состоянием формы, валидация формы и отправка формы.
9. **React Popper**. Библиотека, которая предоставляет возможность без особых проблем добавлять всплывающие подсказки, окна и другие типы наложений для проектов. Одна из важнейших возможностей — размещение слоёв относительно любого элемента на странице. Как следствие, разработчик может создавать сложные макеты пользовательского интерфейса с большим количеством всплывающих элементов.
10. **React animations**. Ещё одна отличная библиотека, которая включает в себя большое количество коллекций анимаций.
11. **React Icons**. Ещё одна библиотека, крайне полезная для многих. Она предоставляет набор из более чем 1 000 иконок. В целом, там есть всё — на любой вкус и цвет. А если нет, иконки можно кастомизировать, настроить под себя, изменив их размер и цвет.
12. **Recharts**. Библиотека на базе D3.js, позволяющая строить графики с использованием HTML, SVG и CSS. Её основные преимущества — «заточенность» под React плюс использование компонентного подхода, что даёт возможность обеспечить хорошую модульность. Графики, которые строятся с использованием Recharts, легко комбинировать и использовать заново. Кроме того, стандартные элементы можно без проблем модифицировать.
13. **Framer Motion**. Ещё одна отличная библиотека, которая позволяет добавлять разнообразные анимации и переходы в React-проекты. Работа с библиотекой интуитивно понятна, а сама она поставляется с большим количеством готовых анимационных шаблонов.
14. **React-PDF**. А это отличающаяся от прочих инструментов из подборки библиотека. Она позволяет добавлять поддержку PDF-документов. Базируется она на PDF.js, который используется для отображения PDF-файлов в браузере.
15. **Dnd Kit**. Она необходима для создания элементов drag and drop в React. Соответственно, разработчик может без проблем добавлять эти функции в свои приложения, давая возможность пользователям управлять контентом при помощи визуальных инструментов. Важная особенность библиотеки — бесшовная работа с HTML5 drag-and-drop API. То есть не нужны внешние библиотеки или дополнительные плагины.

---

### Jest

> [!TIP]
>
> _С помощью **Jest** можно запускать unit-тесты, интеграционные тесты и даже Е2Е-тесты (end-to-end)!_

Для того, чтобы начать работу с Jest, нужно установить соответствующие пакеты.

Обычная установка:

```cmd
npm i -D jest
```

**Дополнительно**. Можно установить Jest глобально для данного проекта, чтобы каждый раз не писать <code>require</code> и <code>import</code>:

```cmd
npm i -D @jest/globals
```

Если не устанавливать Jest глобально, то в начале каждого тестового файла нужно будет писать:

```javascript
// Пример импорта
import { expect, jest, test } from '@jest/globals'
```

Есть альтернативный способ установки Jest в свой проект (**❗ПОКА НЕ СОВЕТУЮ ЭТО❗**):

```cmd
npm init jest@latest
```

После этого в консоли необходимо будет ответить на несколько вопросов:

```cmd
The following questions will help Jest to create a suitable configuration for your project

√ Would you like to use Typescript for the configuration file? ...
    yes/no
√ Choose the test environment that will be used for testing »
    node/jsdom (browser-like)
√ Do you want Jest to add coverage reports? ...
    yes/no
√ Which provider should be used to instrument code for coverage? »
    v8/babel
√ Automatically clear mock calls, instances, contexts and results before every test? ...
    yes/no
```

Итак, Jest был установлен! 👍

После установки нужно создать файл <code>jest.config.[tj]s</code> в корне проекта (пример содержания файла представлено в разделе "[jest.config.[tj]s](./GUIDE.md/#jestconfigtjs)").

В файле уже прописаны пути к папке с тестами, папке для кэша (необязательна) и папке для информации о покрытии проекта тестами (необязательна).

Папку <code>\_\_tests\_\_</code> стоит расположить:

- В корне проекта, если проект простой (например, не является сайтом).
- В папке <code>./src</code>, если проект — это сайт. При использовании Vue.js или React.js стоит расположить данную папку в папке с компонентами (<code>./src/components</code>).

Сами тестовые файлы должны иметь расширение <code>\*.test.[tj]s</code>:

- <code>\*.test.[tj]s</code>. Обычные тесты.
- <code>\*.unit.test.[tj]s</code>. Unit-тесты.
- <code>\*.integration.test.[tj]s</code>. Интеграционные тесты.
- <code>\*.e2e.test.[tj]s</code>. E2E-тесты (end-to-end).

В файл <code>package.json</code> нужно добавить дополнительные скрипты:

```json
"scripts": {
    "test": "jest --config=jest.config.js --watchAll --cache",
    "test:unit": "",
    "coverage": "jest --config=jest.config.js --coverage --watchAll --cache",
    "clearCache": "jest --clearCache"
  },
```

> [!TIP]
>
> ❗ Скрипт <code>test:unit</code> — это способ тестировать только отдельные файлы. Для этого нужно указать доп. флаги.
> Например, флаги <code>--testPathIgnorePatterns=</code> и <code>--testPathPattern=</code>

Здесь нужно рассказать про используемые в скриптах флаги:

- **<code>--config=jest.config.js</code>**. Путь к файлу конфигурации Jest, в котором указывается где искать и как выполнять тесты. Если в конфигурации не задан rootDir, тогда каталог с конфигурационным файлом будет считаться rootDir для проекта.
- **<code>--watchAll</code>**. Режим наблюдения. Наблюдает за изменениями в файлах и перезапускает тесты, если что-то изменяется. Если необходимо перезапускать только тесты для измененных файлов, используйте флаг <code>--watch</code>. Это очень удобно 👍
- **<code>--coverage</code> (-с)**. Указывает, что следует собирать и отображать информацию о тестовом покрытии. При запуске команды будет видна таблица в консоли.
- **<code>--cache</code>**. Нужно ли использовать кэш. По умолчанию используется значение true. Отключить использование кэша можно с помощью флага <code>--no-cache</code>.
- **<code>--clearCache</code>**. Удаляет директорию с кэшом Jest и завершает процесс без запуска тестов. Опция <code>cacheDirectory</code> используется для указания директории с кэшом. Если её пропустить, Jest удалит кэш-директорию по-умолчанию. Чтобы узнать, где находится кэш-директория по умолчанию, вызовите следующую комманду: <code>jest --showConfig</code>.

❗ Подробнее про эти флаги можно почитать тут: <https://jestjs.io/ru/docs/cli>

#### ts-jest

В случае, если придётся не просто использовать Typescript, но и тестировать его (ужас😱), то нужно будет дополнительно установить пакет <code>ts-jest</code>:

```cmd
npm i -D jest ts-jest @types/jest
```

Также нужно не забыть добавить параметры настройки в файл <code>jest.config.js</code> (**preset** и **transform**). Подробнее про это я писал в разделе "[jest.config.[tj]s](./GUIDE.md/#jestconfigtjs)".

#### Работа с Jest

Теперь нужно написать сами тесты. Здесь представлен только пример unit-тестов.

❗ Подробнее про методы Jest можно прочитать здесь: <https://jestjs.io/ru/docs/api>

Пример Jest теста:

```javascript
// Импорт методов Jest
import { describe, expect, it } from '@jest/globals'
// Импорт штук для тестирования
import { Pigeon, getPigeonKeys, getLength } from '../../src/Generics/Gererics'

const PIGEON = new Pigeon('Pidgey')

describe('Testing other functions:', () => {
  it('Testing the "getPigeonKeys" function', () => {
    expect(getPigeonKeys(PIGEON)).toEqual(['name', 'flies', 'swims'])
  })

  // Несколько "expect" в одном тесте будут работать
  it('Testing the "getLength" function', () => {
    expect(getLength('123')).toBe(3)
    expect(getLength([1, 2, 3])).toBe(3)
  })

  // Пример TODO-теста
  test.todo('The readonly property of the "BabyShark" Class SHOULD be readonly')
})
```

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

Это всё значительно упрощает процксс тестирования.

#### Покрытие тестами

> [!TIP]
>
> **Покрытие кода** — это то, какой процент кода в данный момент покрыт тестами.

При запуске скрипта <code>coverage</code> в консоли будет отображена следующая таблица:

```cmd
 PASS  __tests__/jest/3-Constructor Params.test.ts (5.052 s)
 PASS  __tests__/jest/5-Generics.test.ts (5.111 s)
 PASS  __tests__/jest/2-Check Methods.test.ts (5.21 s)
 PASS  __tests__/jest/4-Properties.test.ts (5.236 s)
 PASS  __tests__/jest/1-Inheritance.test.ts
----------------|---------|----------|---------|---------|-------------------
| File             | % Stmts   | % Branch   | % Funcs   | % Lines   | Uncovered Line #s   |
| ---------------- | --------- | ---------- | --------- | --------- | ------------------- |
| All files        | 98.52     | 88.88      | 97.67     | 98.48     |
| Birds            | 100       | 100        | 100       | 100       |
| Flamingo.ts      | 100       | 100        | 100       | 100       |
| Penguin.ts       | 100       | 100        | 100       | 100       |
| Fishes           | 100       | 100        | 100       | 100       |
| Baby Shark.ts    | 100       | 100        | 100       | 100       |
| Shark.ts         | 100       | 100        | 100       | 100       |
| Generics         | 92.85     | 100        | 90        | 91.66     |
| Gererics.ts      | 92.85     | 100        | 90        | 91.66     | 77                  |
| Parent Classes   | 100       | 75         | 100       | 100       |
| Animal.ts        | 100       | 75         | 100       | 100       | 40,47               |
| Bird.ts          | 100       | 100        | 100       | 100       |
| Fish.ts          | 100       | 100        | 100       | 100       |
| ---------------- | --------- | ---------- | --------- | --------- | ------------------- |

Seed:        652643719
Test Suites: 5 passed, 5 total
Tests:       2 todo, 41 passed, 43 total
Snapshots:   0 total
Time:        6.657 s, estimated 10 s
Ran all test suites.
```

#### Snapshots

> [!NOTE]
>
> Подробнее про это написано в **[официальной документации Jest](https://jestjs.io/ru/docs/snapshot-testing)**.

Тестирование с использованием снимков это очень полезный инструмент в ситуациях где вы хотите быть уверены, что ваш пользовательский интерфейс не изменяется неожиданным образом.

Типичный тест с использованием снимков сначала рендерит ваш UI-компонент, создает снимок на основе рендера, затем сранивает его с эталонным снимком, который хранится вместе с тестом. Тест считается проваленным, если снимки не совпадают: либо измнение непредвиденно, либо снимок нуждается в обновлении до акутальной версии UI-компонента.

```js
import renderer from 'react-test-renderer'
import Link from '../Link'

it('renders correctly', () => {
  const tree = renderer.create(<Link page="http://www.facebook.com">Facebook</Link>).toJSON()
  expect(tree).toMatchSnapshot()
})
```

#### Expect

> **TODO** 👀
> <https://jestjs.io/ru/docs/expect>

#### Mock-функции

> **TODO** 👀
> <https://jestjs.io/ru/docs/mock-function-api>

#### Объект Jest

> **TODO** 👀
> <https://jestjs.io/ru/docs/jest-object>

---

### Vite.js

Попробуем создать проект, используя Vite:

```cmd
npm create vite@latest
```

В процессе создания проекта можно выбрать языки/фреймворки/библиотеки, которые будут задействованы в разработке проекта:

- **Обычные сайты ([TypeScript](#typescript) или JavaScript)**. Тоже вариант. Только не понятно, как использовать Express.js вместе с Vite 🤔.
- **[Vue.js](#vuejs)**. Можно также создать проект на Nuxt.js. Проект на Vue лучше создавать, используя **"create-vue"**.
- **[React.js](#reactjs)**. Можно создать обычные сайты, а мобильные приложения здесь создать не получится.
- ...

Затем нужно посмотреть файл конфигурации Vite. Писал я о этом здесь: **[vite.config.[tj]s](./GUIDE.md/#viteconfigtjs)**.

#### Чистый Javascript/Typescript

Можно выбрать ванильный JavaScript/TypeScript при работе с Vite: ничего особого здесь нет.

#### Express.js + Vite

> [!NOTE]
>
> 👀 Про это здесь читал: <https://blog.codeminer42.com/making-a-full-stack-app-with-vue-vite-and-express-that-supports-hot-reload/>

Можно сделать так, чтобы доступ к сайту осуществлялся с порта, на котором сервер работает (<http://localhost:3000>). Если перейти на этот порт, то клиентская часть сайта тоже будет корректно отображаться. **ИХ НЕ ОБЯЗАТЕЛЬНО НУЖНО ОБЪЕДИНЯТЬ! Они могут просто работать параслельно друг други на разных портах!**

❗ Рассмотрим шаги.

1. Переименуем файл <code>index.html</code> в <code>index.ejs</code>. Допишем это:

```html
<!doctype html>
<html lang="en">
  <head>
    <!-- ... -->
  </head>
  <body>
    <div id="app"></div>
    <!-- Эти 2 скрипта -->
    <script type="module" src="http://localhost:5173/@vite/client"></script>
    <script type="module" src="http://localhost:5173/src/main.js"></script>
  </body>
</html>
```

2. Создадим новую папку "server" в корне проекта. В этой папке будут файлы:

```cmd
assetsRouter.js
db-connect.js
homepageRouter.js
index.js
```

3. assetsRouter.js:

```js
import express from 'express'

const router = express.Router()

const supportedAssets = ['svg', 'png', 'jpg', 'png', 'jpeg', 'mp4', 'ogv']

const assetExtensionRegex = () => {
  const formattedExtensionList = supportedAssets.join('|')

  return new RegExp(`/.+\.(${formattedExtensionList})$`)
}

router.get(assetExtensionRegex(), (req, res) => {
  res.redirect(303, `http://localhost:5173/src${req.path}`)
})

export default router
```

4. db-connect.js:

```js
import pg from 'pg'

const db = new pg.Pool({
  connectionString: `postgres://postgres:123@127.0.0.1/lab2`
})

db.connect((err) => {
  if (err) throw err
  console.log('\tINFO: База данных PostgreSQL подключена!')
})

export default db
```

5. homepageRouter.js:

```js
import express from 'express'
import path from 'path'

import bodyParser from 'body-parser'

const router = express.Router()
router.use(express.json()).use(bodyParser.urlencoded({ extended: true }))

const environment = process.env.NODE_ENV || 'dev'
console.log('👀 process.env.NODE_ENV:', environment)

// Подключаем DB
import database from './db-connect.js'

//! Обработка запросов
router.use('*', async (req, res, next) => {
  // Показ данных "products"
  if (req.originalUrl === '/api/getProducts') {
    try {
      const result = await database.query('SELECT * FROM products')
      res.json(result.rows)
    } catch (error) {
      console.error('Error executing query', error)
      res.status(500).json({ error: 'Internal server error' })
    }
    // Создание новой категории
  } else if (req.originalUrl === '/api/createCategory') {
    try {
      const { category_id, category_name, description } = req.body
      const result = await database.query(
        `INSERT INTO categories (category_id, category_name, description) VALUES (${category_id}, '${category_name}', '${description}')`
      )
      res.json(result.rows)
    } catch (error) {
      console.error('Error executing query', error)
      res.status(500).json({ error: 'Internal server error' })
    }
    // Удаление товара по ID
  } else if (req.originalUrl.startsWith('/api/deleteProductByID/')) {
    try {
      const id = req.originalUrl.split('/').pop() // Extract id from URL
      const result = await database.query(`DELETE FROM products WHERE product_id = $1`, [id])
      res.json({ message: 'Product deleted successfully' })
    } catch (error) {
      console.error('Error executing query', error)
      res.status(500).json({ error: 'Internal server error' })
    }
    // Проверка наличия товара по ID
  } else if (req.originalUrl.startsWith('/api/checkProductByID/')) {
    try {
      const id = req.originalUrl.split('/').pop() // Extract id from URL
      const result = await database.query(`SELECT * FROM products WHERE product_id = $1`, [id])
      res.json(result.rows)
    } catch (error) {
      console.error('Error executing query', error)
      res.status(500).json({ error: 'Internal server error' })
    }
    // Получение максимального ID товара
  } else if (req.originalUrl.startsWith('/api/getMaxProductID')) {
    try {
      const result = await database.query(`SELECT MAX(product_id) FROM products;`)
      res.json(result.rows)
    } catch (error) {
      console.error('Error executing query', error)
      res.status(500).json({ error: 'Internal server error' })
    }
  }
  // Проверка наличия supplier_id в БД
  else if (req.originalUrl.startsWith('/api/checkSupplier/')) {
    try {
      const id = req.originalUrl.split('/').pop() // Extract id from URL
      const result = await database.query(`SELECT * FROM suppliers WHERE supplier_id = $1`, [id])
      res.status(200).json({ success: 'ID Exists!' })
    } catch (error) {
      console.error('Error executing query', error)
      res.status(500).json({ error: 'Internal server error' })
    }
  }
  // Добавление нового товара
  else if (req.originalUrl.startsWith('/api/createProduct')) {
    try {
      const {
        product_id,
        product_name,
        supplier_id,
        category_id,
        quantity_per_unit,
        unit_price,
        units_in_stock,
        units_on_order,
        reorder_level,
        discontinued
      } = req.body

      const result = await database.query(
        `INSERT INTO products (product_id, product_name, supplier_id, category_id, quantity_per_unit, unit_price, units_in_stock, units_on_order, reorder_level, discontinued)
        VALUES (${product_id}, '${product_name}', ${supplier_id}, ${category_id}, '${quantity_per_unit}', ${unit_price}, ${units_in_stock}, ${units_on_order}, ${reorder_level}, ${discontinued})`
      )
      res.json(result.rows)
    } catch (error) {
      console.error('Error executing query', error)
      res.status(500).json({ error: 'Internal server error' })
    }
  } else {
    res.render('../index.html.ejs')
  }
})

export default router
```

6. index.js:

```js
import express from 'express'
import path from 'path'

import homepageRouter from './homepageRouter.js'
import assetsRouter from './assetsRouter.js'

const port = process.env.PORT || 3000
const publicPath = path.join(path.resolve(), 'public')
const distPath = path.join(path.resolve(), 'dist')

const app = express()

app.use('/', express.static(publicPath))
app.use('/src', assetsRouter)

app.use(homepageRouter)
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', async (req, res) => {
  // res.send("Welcome to the homepage!");
})

app.listen(port, () => {
  console.log('Server listening on port', port)
})
```

7. Устанавливаем эти библиотеки:

```cmd
npm i concurrently -D
npm i nodemon -D
```

8. Добавляем скрипты в <code>package.json</code>:

```json
"scripts": {
    "dev": "concurrently 'npm:dev:frontend' 'npm:dev:backend'",
    "dev:frontend": "vite",
    "dev:backend": "nodemon server/index.js",
    "build": "vite build",
    "preview": "vite preview"
  },
```

#### Vue.js + Vite

Можно создать сайт с использованием Vue.js (+ JavaScript/TypeScript). Также есть возможность создать проект на Nuxt.js.

Лучший способ создать простой проект на Vue.js — параметр **"create-vue"** (Vue -> "Customize with create-vue"). Этот параметр специально предусмотрен для создания Vue-проектов.

При создании проекта данным методом можно добавить дополнительные инструменты в свой Vue-проект:

- TypeScript.
- Поддержка JSX.
- Vue Router для SPA-сайтов.
- Pinia для state management.
- Vitest для Unit-тестов.
- Для тестирования end-to-end (No, Cypress, Nightwatch, Playwright).
- ESLint.

#### React.js + Vite

Можно создать сайт с использованием React.js (+ JavaScript/TypeScript). Никакого React-native здесь нет.

#### Доп. настройки

ХЗ

---

### Docker

> [!NOTE]
>
> "Docker Desktop" должен быть предварительно установлен.

Я БД разворачиваю, используя Docker-контейнер PostgreSQL.

Сами образы не нужно устанавливать в Docker Desktop. Образ PostgreSQL можно создать, используя <code>docker-compose.yml</code> файл в корне проекта:

```yml
version: '3.7'
services:
  postgres:
    image: postgres:15.2
    restart: 'always'
    ports:
      - '5432:5432'
    volumes:
      - './db/postgresql_data:/var/lib/postgresql/data'
    env_file:
      - .env

  pgadmin:
    image: dpage/pgadmin4:6.21
    restart: 'always'
    volumes:
      - './db/pgadmin_data:/var/lib/pgadmin'
    ports:
      - '80:80'
    env_file:
      - .env
    depends_on:
      - postgres
```

Здесь указано место в папке проекта, где будет находится папка с БД.

Также все важные переменные среды будут считаны из файла <code>.env</code>. Ниже представлен пример этого файла:

```.dotenv
# GENERAL SETTINGS
NODE_ENV=development
PORT=5500

# JWT
ACCESS_TOKEN_SECRET=someSecret
REFRESH_TOKEN_SECRET=someSecret

# POSTGRESQL SETTINGS
POSTGRES_USER=name
POSTGRES_PASSWORD=password
POSTGRES_DB=MyDB
PGADMIN_DEFAULT_EMAIL=admin@localhost.com
PGADMIN_DEFAULT_PASSWORD=admin@localhost.com
```

Теперь нужно запустить БД:

- Запускаем Docker Desktop.
- Вводим в терминале VS Code команду:

  ```cmd
  docker-compose up -d
  ```

  Если это делается в 1й раз, то этот процесс может занять много времени.

- Используем расширение "Database" для VS Code, чтобы эффективно работать с БД. Для этого нужно подключиться к БД, используя **database connection string**. Для PostgreSQL она имеет такой формат:

  ```cmd
  postgres://{POSTGRES_USER}:{POSTGRES_PASSWORD}@localhost:5432
  ```

- Чтобы выключить соединение с БД, нужно ввести команду:

  ```cmd
  docker-compose down
  ```

Пример подключения к БД (в виде отдельного модуля. Используй "Pool"):

```js
import pg from 'pg'

const db = new pg.Pool({
  connectionString: `postgres://postgres:123@localhost:5432/postgres`
})

db.connect((err) => {
  if (err) throw err
  console.log('\tINFO: База данных PostgreSQL подключена!')
})

export default db
```

---

### PostgreSQL

> [!IMPORTANT]
>
> Про основы тут не буду писать. Только про интересные вещи.

#### VIEWS

В PostgreSQL VIEW это не физическая таблица, а скорее виртуальная таблица, созданная запросом joins, соединяющим одну или несколько таблиц.

```sql
CREATE VIEW view1 AS
SELECT
  order_date,
  required_date,
  shipped_date,
  ship_postal_code,
  customers.company_name,
  customers.contact_name,
  customers.phone,
  employees.first_name,
  employees.last_name,
  employees.title
FROM orders
JOIN employees ON orders.employee_id=employees.employee_id
JOIN customers ON orders.customer_id=customers.customer_id;

SELECT * FROM view1;

SELECT * FROM view1
WHERE
    date_part('year', order_date) = 1997 AND
    date_part('month', order_date) = 1 AND
    date_part('day', order_date) > 1;
```

Защита VIEW от ненужных вставок:

```sql
-- Защищено от вставки записей, в которых discontinued = 1.
CREATE VIEW view3 AS
SELECT * FROM products
WHERE discontinued=0
WITH LOCAL CHECK OPTION
```

#### CASES

Условные операторы, которые можно использовать прямо внутри SELECT:

```sql
SELECT
    product_name,
    unit_price,
    CASE
        WHEN unit_price >= 100 THEN 'too expensive'
        WHEN unit_price >=50 AND unit_price <100 THEN 'average'
        WHEN unit_price >=25 AND unit_price <50 THEN 'low price'
        ELSE 'very cheap'
    END AS "Price"
FROM products
ORDER BY unit_price DESC
```

#### FUNCTIONS

```sql
-- Попроще
CREATE OR REPLACE FUNCTION count_unshipped_orders()
    RETURNS INT
    LANGUAGE SQL
AS $function$
    SELECT count(order_id) AS unshipped_orders
    FROM orders
    WHERE shipped_date IS NULL;
$function$;

select count_unshipped_orders();

-- Посложнее
CREATE OR REPLACE FUNCTION min_max_salary(input_city VARCHAR)
    RETURNS TABLE (min_salary NUMERIC, max_salary NUMERIC)
    LANGUAGE SQL
AS $function$
    SELECT min(salary), max(salary)
    FROM employees
    WHERE city = input_city;
$function$;

SELECT * FROM min_max_salary('Seattle');
```

#### TRIGGERS

```sql
CREATE OR REPLACE FUNCTION products_audit()
    RETURNS TRIGGER
    LANGUAGE plpgsql
AS $function$
BEGIN
    CREATE TABLE IF NOT EXISTS products_audit (
        audit_id SERIAL PRIMARY KEY,
        product_name VARCHAR(40),
        old_price real,
        new_price real,
        change_date DATE
    );

    IF OLD.unit_price != NEW.unit_price THEN
        INSERT INTO products_audit (product_name, old_price, new_price, change_date)
        VALUES (OLD.product_name, OLD.unit_price, NEW.unit_price, CURRENT_DATE);
    END IF;

    RETURN NEW;
END
$function$;

-- Триггер на вставку и обновление данных.
-- Применяет функцию products_audit() к каждой строке таблицы.
CREATE OR REPLACE TRIGGER products_audit
    AFTER UPDATE
    ON products
    FOR EACH ROW
    EXECUTE FUNCTION products_audit();

--* Работает, если новая цена отличается от старой
UPDATE products
SET unit_price = 69
WHERE product_id = 1;
```

#### USERS AND PRIVILEGES

```sql
--! Создание Пользователей
CREATE USER boss WITH PASSWORD '123';
CREATE USER personnel WITH PASSWORD '123';

--! УДАЛЕНИЕ
DROP USER boss;
DROP USER personnel;

--! Удаление Прав
REVOKE ALL PRIVILEGES ON ALL TABLES IN SCHEMA public FROM boss;
REVOKE ALL PRIVILEGES ON ALL TABLES IN SCHEMA public FROM personnel;

--! Даём Права
GRANT SELECT, INSERT, UPDATE ON employees TO personnel;
GRANT DELETE ON employees TO boss;
GRANT SELECT, INSERT, UPDATE ON suppliers TO boss;
GRANT SELECT, INSERT, UPDATE ON shippers TO boss;
GRANT SELECT ON all TABLES IN SCHEMA PUBLIC TO boss;

--* Сменить Пользователя
SET ROLE manager;
--* Вернуть пользователя по умолчанию
SET ROLE postgres;
```

#### DATA DUMP

1й способ (в CMD. Новая БД уже создана):

```cmd
pg_dump -U postgres -d lab2 > "C:\Users\admin\Downloads\My_Northwind.backup";
psql -U postgres -d new_northwind < "C:\Users\admin\Downloads\My_Northwind.backup";
```

2й способ (через pdAdmin).

3й способ (через то расширение VS Code. Выбрать "Dump Data").

#### PROCEDURES

В отличии от функций, процедуры не возвращают никаких значений.

```sql
CREATE OR REPLACE PROCEDURE copy_vip_customers()
LANGUAGE plpgsql
AS $$
DECLARE
    customer_id VARCHAR(5);
    orders_count INT;
    customer_row RECORD;
BEGIN
    FOR customer_row IN
        SELECT orders."customer_id", COUNT(orders."order_id") AS "OrdersCount"
        FROM orders
        JOIN customers ON orders."customer_id" = customers."customer_id"
        GROUP BY orders."customer_id"
        HAVING COUNT(orders."order_id") > 25
    LOOP
        customer_id := customer_row."customer_id";
        orders_count := customer_row."OrdersCount";
        INSERT INTO vip_customers
        SELECT * FROM customers WHERE customers."customer_id" = customer_row."customer_id";
    END LOOP;
END;
$$;

--* Запустим процедуру
CALL copy_vip_customers();

--* Удалить процедуру
DROP PROCEDURE copy_vip_customers;

--* Проверка 🤪
SELECT * FROM vip_customers
ORDER BY "customer_id";
```

---

### Axios

Для общения клиента с сервером.

Установка:

```cmd
npm install axios
```

Пример запросов:

```js
import axios from 'axios'

// ...

const createCategory = async () => {
  try {
    if (categoryName.value.trim().length == 0) {
      throw new Error('Введите название категории! ❌')
    }

    // Получение данных от сервера
    const maxID = await axios.get('/api/getMaxCategoryID')

    // Отправка данных на сервер
    await axios.post('/api/createCategory', {
      category_id: maxID.data[0].max + 1,
      category_name: categoryName.value,
      description: description.value
    })

    alert('Категория успешно создана! ✅')

    categoryName.value = description.value = ''
  } catch (error) {
    console.error(error)
  } finally {
    console.log('Процесс СОЗДАНИЯ категории завершён!')
  }
}

const deleteProductByID = async () => {
  try {
    if (productID.value === null) {
      throw new Error('Введите ID продукта! ❌')
    }
    if (productID.value <= 0) {
      throw new Error("ID продукта должен быть больше '0'! ❌")
    }

    // Проверка товара на существование
    try {
      const product_ID = await axios.get(`/api/checkProductByID/${productID.value}`)
    } catch (error) {
      throw new Error(`Продукт с ID '${productID.value}' не найден! ❌`)
    }

    // Удаление товара по ID
    await axios.delete(`/api/deleteProductByID/${productID.value}`)
    alert(`Продукт с ID '${productID.value}' был успешно удален! ✅`)

    productID.value = null
  } catch (error) {
    alert(error)
  } finally {
    console.log('Процесс УДАЛЕНИЯ продукта завершён!')
  }
}
```

---

### Firebase

База данных без SQL.

Нужно перейти на официальный сайт (<https://console.firebase.google.com/?hl=en>) и создать новый Firebase project.

После этого нужно выбрать "web app" и зарегистрировать приложение (имя ему дать).

Наконец-то, нужно будет установить Firebase:

```cmd
npm i firebase
```

Потом дополнить файл `main.[jt]s`:

```ts
import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC7ey0CwLjDiBWEFDFJKIIhqbarjwpZel0',
  authDomain: 'library-spa-bcaa8.firebaseapp.com',
  projectId: 'library-spa-bcaa8',
  storageBucket: 'library-spa-bcaa8.appspot.com',
  messagingSenderId: '537920377418',
  appId: '1:537920377418:web:f8d2da5c2da1b802180cb3',
  measurementId: 'G-N86HR887YX'
}

// Initialize Firebase
const FireApp = initializeApp(firebaseConfig)
const analytics = getAnalytics(FireApp)

app.mount('#app')
```

Как с этим дальше работать?

```ts
import { getFirestore, collection, getDocs, deleteDoc, doc } from 'firebase/firestore'

const db = getFirestore()
const booksCollection = collection(db, 'books') // коллекция 'books'

// Добавление в коллекцию
let book: Book = { name, authors, year, rating, ISBN }
await addDoc(booksCollection, book)

// Чтение коллекции
const querySnapshot = await getDocs(booksCollection)
const CollectionDocs = querySnapshot.docs
const books: Book[] = querySnapshot.docs.map((doc) => doc.data() as Book) // например

// Удаление из коллекции
const bookToDelete = querySnapshot.docs.find((doc) => doc.data().name === bookName) // например
await deleteDoc(doc(booksCollection, bookToDelete.id))
```

👀 Данные в коллекциих можно посмотреть в разделе "Firestore Database" (например):
<https://console.firebase.google.com/project/library-spa-bcaa8/firestore/databases/-default-/data/~2Fbooks~2F2fdm6HLsMZkuEBqke3cC?hl=en>

---

## Дополнительно

ХЗ

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

**CSS**:
<> ()

**README**:
<https://readme.so/ru/editor> (Простой редактор README)
<> ()

**Другое**:
<https://ray.so> (Create beautiful images of your code)
<https://devdocs.io> (Много документаций в одном месте)
<https://devhints.io> (Cheatsheets)
<https://shortcode.dev> (Cheatsheets)
<https://andreasbm.github.io/web-skills/?compact> (Полезные ссылки)
<https://frontendchecklist.io> (The Front-End Checklist)
<> ()
