// Функция для проверки числа
function checkNumber() {
   let value = prompt("Введите значение:");
    let number = +value;
    if (typeof number === 'number' && !isNaN(number)) {
    
        if (number % 2 === 0) {
            console.log("Чётное");
        } else {
            console.log("Нечётное");
        }
    } else {
        console.log("Упс, кажется, вы ошиблись");
    }
}

// Вызываем функцию
checkNumber();