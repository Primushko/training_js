// 1._____________________________________________________________________________
// Використовуючи функцію if...else,
// напишіть код, який запитуватиме:
// "Яка офіційна назва JavaScript?"
// Якщо користувач вводить "ECMAScript",
// показати через alert: "Вірно!"
// інакше відобразити:"Не знаєте? ECMAScript!"

// const question = prompt("Яка офіційна назва JavaScript?");
// console.log(question, typeof question);
// if (question === "ECMAScript") {
//     alert("Вірно!");
// } else {
//     alert("Не знаєте? ECMAScript!");
// }
// ________________________________________________________________________________
// 2.______________________________________________________________________________
// Напишіть програму, яка отримає від користувача
// число (кількість хвилин) і виведе у консоль
// Рядок у форматі годин і хвилин 01:10
// 70 === 01:10
// Отримайте кількість хвилин -
// let minutes = parseInt(prompt("Введіть кількість хвилин:"));
// Візіміть ціле від ділення на 60, це кількість годин
// let hours = Math.floor(minutes / 60);
// Обробіть години так щоб відповідали формату
// minutes = minutes % 60;
// Візіміть залишок від ділення на 60, це кількість хвилин
// Обробіть хвилини так щоб відповідали формату
// let hoursStr = hours.toString().padStart(2, "0");
// let minutesStr = minutes.toString().padStart(2, "0");
// Вивести результат
// console.log(hoursStr + ":" + minutesStr);
// __________________________________________________________________________________
