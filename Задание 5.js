let array = [1, 2, 3, 4, 5, "Hello", true, {key: "value"}, [1, 2, 3]];

console.log("Количество элементов массива: " + array.length);

// Перебираем массив и выводим каждый элемент в консоль
array.forEach(function(element) {
    console.log(element);
});