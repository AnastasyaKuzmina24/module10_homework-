function checkType(x) {
    if (typeof x === 'number') {
        console.log(`x — число`);
    } else if (typeof x === 'string') {
        console.log(`x — строка`);
    } else if (typeof x === 'boolean') {
        console.log(`x — логический тип`);
    } else {
        console.log(`Тип x не определён`);
    }
}

// Примеры 
let x1 = 42;
let x2 = "Hello";
let x3 = true;
let x4 = {};

