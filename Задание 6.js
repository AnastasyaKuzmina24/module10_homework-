function Equal(array) {
    // Проверяем, если массив пустой или содержит только один элемент
    if (array.length === 0 || array.length === 1) {
        return true;
    }

    // Получаем первый элемент массива
    let firstElement = array[0];

    // Проверяем, все ли элементы массива равны первому элементу
    for (let i = 1; i < array.length; i++) {
        if (array[i] !== firstElement) {
            return false;
        }
    }

    return true;
}

// Примеры 
let array1 = [1, 1, 1, 1];
let array2 = [1, 2, 3, 4];
let array3 = ["a", "a", "a"];
let array4 = ["a", "b", "a"];

console.log(Equal(array1)); // true
console.log(Equal(array2)); // false
console.log(Equal(array3)); // true
console.log(Equal(array4)); // false