# ВАЖНО
> 👀 **Изображение**: [Здесь](https://www.plantuml.com/plantuml/png/jLLTJjj047xVKup22uWc1uXGeQYYJrH8v0ABFOvNsBkMTmn2fHAaug5IVzIg3tth5MX5fAejS8Nr5Ng27g5ZEq6ROb3JAegITRxlcvbl9l5umvBCgKWJ8UIUfLm6144YhONE8wrIcNJWcG1O1IrJx0Chb1xMG9GejEjzs3CcGQdX60eTOgGqXZLl3rLw7p-8SIStPEWemssqLWvntIlGxTQg6rCeoIwlU0AF6o8zPNjCtugt94a5asCRAJPXcumpWDAHyRZdjoUogV9mEezUh_V_BdtQClBlrhQKZHTdBUCYyLtiOInfmEzjbDh-VGTJuubC6J5jvbiyjrkzStYPiJYtfHtKmqBfnJYIMYP7LjdvNQaXcWMPih7CgOqm1vWdHePRXGv86RsiT5RGOqco3uNUr-PGhxGAdw36N0LsRV3GZndCs_KkEzl_esd8SdKW2NSno96yX4lC6CA0CFGuhzZCr6ogaja1BLLUTcPJp4wb5lZLv_uPD-NU4Ioig-PoTSvbqcnwM3lkTg7QSJD0jLc4gE39zyaDwq6J6yP7wZ-h45LmZJGjY_gp0Vn92A4D8IGO4PW8clBzVkU-PqH70BG9El3pv0EKhykHks99UUgk-FMvVEd6xj9zTUC7uBwvguekJvWP0vClt8KRbwDAVyReUQKiH-MhyhHy2-uBk6j6cvWHvxXsOm5Lck_kd2MdxlpcSTaJ5VCUt6NvpltWWnLdNEQYJiZfMXprcrQKXL2I13ujcHn3K1eeHiYcBRBEH3NKL9ji_r-VFhxf2DGXL6CKOeClYpJv3G00)

> **Веб-сервисервис для построения UML-диаграмм онлайн**: [Здесь](https://plantuml.com/ru/sitemap)

## Диаграмма классов

```uml
@startuml

abstract class "Animal" {
  + name: string
  + flies?: boolean | undefined
  + swims?: boolean | undefined
  + ThePrototypeMessage?: string
  --
  + abstract eats(): string
  + abstract getName(): string
  --
  + static staticMethod(): string
  --
  + get info(): string
}

abstract class "Bird" {
  + ...
  --
  + abstract eats(): string
  + abstract getName(): string
  + abstract sing(): string
  --
  + get info(): string
}

abstract class "Fish" {
  + ...
  --
  + abstract eats(): string
  + abstract getName(): string
  + abstract splash(): string
  + abstract whatThatMeans(): string
  --
  + get info(): string
}

class "Flamingo" {
  + ...
  --
  + eats(): string
  + getName(): string
  + sing(): string
  --
  + pose(): string
  --
  + get info(): string
}

class "Penguin" {
  + ...
  --
  + eats(): string
  + getName(): string
  + sing(): string
  --
  + analysis(): string
  --
  + get info(): string
}

class "Pigeon" {
  + ...
  --
  + eats(): string
  + getName(): string
  + sing(): string
  --
  + shart(): string
  --
  + overloadFunction(inputData: unknown)
  + overloadFunctionGenerics<T>(inputData: T): string
  --
  + get info(): string
}

class "Shark" {
  + ...
  - privateSecret: string
  # protectedSecret: string
  --
  ...
  --
  + smile(): string
  # getProtectedSecret(): string
  - getPrivateSecret(): string
  --
  + get info(): string
}

class "Baby Shark" {
  + ...
  - privateSecret: string
  # protectedSecret: string
  --
  ...
  --
  ...
  + sing(): string
  --
  + get info(): string
}

Animal <|-- Bird
Animal <|-- Fish

Bird <|-- Flamingo
Bird <|-- Penguin
Bird <|-- Pigeon

Fish <|-- Shark
Shark <|-- "Baby Shark"

note left of Animal::"ThePrototypeMessage?: string"
  "ThePrototypeMessage" — это
  сообщение, которое будет
  храниться в прототипе
  класса "Animal".

  В нём находится сообщение:
  "This data is stored in the prototype
  of the Animal class 😎"
end note

@enduml
```
