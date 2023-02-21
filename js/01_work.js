// РАСПІЛЕНИЕ ...

// const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);
// const numbers = [100, ...[1, 2, 3], 5000, ...[4, 5, 6], 7000];
// console.log(numbers);

// поиск самой маленькой температури

    // const temps = [18, 25, 12, 28, 3, 17];

    // console.log(Math.max(...temps));
    // console.log(Math.min(...temps));

    // const a = [1, 2, 3];
    // const b = [...a];

    // console.log(a);
    // console.log(b);

// РАСПІЛЕНИЕ ... обьектов -Object.prolotype.assing() i spread
// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };
// // const c = Object.assign({}, a, b);
// // заменяєм на новою
// const c = { ...a, ...b, };
// console.log(c);
// ПРИКЛАД:
// const defaultSettings = {
//     theme: `light`,
//     showMotifications: true,
//     hideSidebar: false,
// };

// const userSettings = {
//     showMotifications: false,
//     hideSidebar: true,
// };

// const finalSettings = {
//     ...defaultSettings,
//     ...userSettings,
// };
// console.log(finalSettings);


// КОЛБЕК-ФУНКЦІЇ

// function greet(name) {
//     return `Ласкаво просимо ${name}.`;
// }

// Викликаємо функцію greet і виводимо результат у консоль
// console.log(greet(`Mango`));

// Виводимо функцію greet у консоль, не викликаючи її
// console.log(greet);

//                 Колбек-функція
// function greet(name) {
//     console.log(`Ласкаво просимо ${name}.`);
// }
//               Функція вищого порядку
// function registerGuest(name, callback) {
//     console.log(`Реєструємо гостя ${name}.`);
//     callback(name);
//     }
// передали посилання на функцію greet як аргумент
// registerGuest("Манго", greet);


//                  ІНЛАЙН КОЛБЕКИ
    // function registerGuest(name, callback) {
    //     console.log(`Реєструємо гостя ${name}.`);
    //     callback(name);
    //     }
        
// Передаємо інлайн функцію greet у якості колбека
    // registerGuest("Манго", function greet(name) {
    // console.log(`Ласкаво просимо ${name}.`);
    // });
// Передаємо інлайн функцію notify у якості колбека
    // registerGuest("Полі", function notify(name) {
    // console.log(`Шановний(а) ${name}, ваш номер буде готовий за 30 хвилин.`);
    // });
    //                 АБСТРАКЦІЯ
    // function printValue(value) {
    //     console.log(value);
    // }
    // function prettyPrint(value) {
    //     console.log("Logging value: ", value);
    // }
    // function repeat(n, action) {
    //     for (let i = 0; i < n; i += 1) {
    //     action(i);
    //     }
    // }  
// // Передаємо printValue як callback-функцію      
//     repeat(3, printValue);
// 0
// 1
// 2
 // Передаємо prettyPrint як callback-функцію
    // repeat(3, prettyPrint);
// Logging value: 0
// Logging value: 1
// Logging value: 2   
function makePizza() {
    return "Your pizza is being prepared, please wait.";
    }
  // Change code below this line
    
    const result = makePizza();
    const pointer = (makePizza);
    console.log(makePizza(result));

    function calculateTotalPrice(orderedItems) {
        let totalPrice = 0;
        // Change code below this line
        
        
        
        // Change code above this line
        return totalPrice;
        }