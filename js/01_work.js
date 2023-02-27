// Контекст виконання функції ...Всередині функцій можна
// використовувати зарезервоване ключове слово this.
// Під час виконання функції, в this записується посилання на об'єкт,
//  в контексті якого вона була викликана.Таким чином,
//  в тілі функції ми можемо отримати доступ до властивостей і методів цього об'єкта.

// const bookShelf = {
//   authors: ["Бернард Корнуелл", "Роберт Шеклі"],
//   getAuthors() {
//     return this.authors;
//   },
//   addAuthor(authorName) {
//     this.authors.push(authorName);
//   },
// };

// console.log(bookShelf.getAuthors()); // ["Бернард Корнуелл", "Роберт Шеклі"]
// bookShelf.addAuthor("Лі Таніт");
// console.log(bookShelf.getAuthors()); // ["Бернард Корнуелл", "Роберт Шеклі", "Лі Таніт"]

// Методи getAuthors і addAuthor - це функції (методи об'єкта), які викликаються в контексті
// об'єкта bookShelf. Під час їх виконання в this записується посилання на об'єкт bookShelf і
// ми можемо звернутися до його властивостей і методів.
