function reverseString(str) {
    let reversedStr = str.split('').reverse().join('');
    console.log(reversedStr);
}

// Пример 
let inputString = "Hello";
reverseString(inputString); // Вывод: "olleH"