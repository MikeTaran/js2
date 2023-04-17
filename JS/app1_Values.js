// замена 2-х переменных
let num1 = +prompt("Enter num1:");
let num2 = +prompt("Enter num2:");

console.log(num1, num2);
// только цифры
num2 = num1 + ((num1 = num2), 0);

console.log(num1, num2);
// любые
num2 = [num1, (num1 = num2)][0];

console.log(num1, num2);
//
// Проверка, является ли символ буквой
let character = 'a';
let isLetter = /^[A-Za-z]$/.test(character);
console.log(isLetter); // true

// Проверка, является ли символ знаком
character = ',';
let isSymbol = /^[^\w\s]$/.test(character);
console.log(isSymbol); // true

// Проверка, является ли символ цифрой
character = '7';
let isDigit = /^\d$/.test(character);
console.log(isDigit); // true