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
// function foo() {
//   console.log(this);
// }

// foo();
//  window без "use strict" і undefined з "use strict"
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// -----------------------
// this в методі об'єкта
// -----------------------
// Якщо функція була викликана як метод об'єкта,
// то контекст буде посилатися на об'єкт,
// частиною якого є метод.
// ПРИКЛАД
// 1.Спочатку створимо функцію в глобальній області видимості і викличемо її.
// function showThis() {
//   console.log("this in showThis: ", this);
// }

// Викликаємо у глобальному контексті

// showThis();

// this in showThis: Window

// const user = {
//   username: "Mango",
// };

// Записуємо посилання на функцію у властивість об'єкта
// Зверніть увагу, що це не виклик - немає ()

// user.showContext = showThis;

// Викликаємо функцію в контексті об'єкта
// this буде вказувати на поточний об'єкт, в контексті
// якого здійснюється виклик, а не на глобальний об'єкт.

// user.showContext();

// this in showThis: {username: "Mango", showContext: ƒ}
// ----------------------
// this в callback-функціях
// ------------------------
// Передаючи методи об'єкта як колбек-функції, контекст не зберігається.
// Колбек - це посилання на метод, яке присвоюється 
// як значення параметра, що викликається без об'єкта.

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {  
//   console.log(`Обробляємо заявку від ${callback()}.`);
// }
// callback() - це виклик методу getFullName без об'єкта


// makeMessage(customer.getFullName);
// Буде помилка у виклику функції