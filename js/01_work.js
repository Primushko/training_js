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
const defaultSettings = {
    theme: `light`,
    showMotifications: true,
    hideSidebar: false,
};

const userSettings = {
    showMotifications: false,
    hideSidebar: true,
};

const finalSettings = {
    ...defaultSettings,
    ...userSettings,
};
console.log(finalSettings);
