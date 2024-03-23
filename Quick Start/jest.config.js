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
