let arr=[8, 22, 33]
// добавляем элемент в конец массива
arr.push(44)
    console.log(arr)
// удаляет первый элемент
arr.shift()
    console.log(arr)
// удаляеи последний
arr.pop()
    console.log(arr)
// добавлет в начало
arr.unshift(55, 66)
    console.log(arr)
// очистка элемента
delete arr[1]
    console.log(arr)
// удаление (начиная с первой прзиции, один элемент и добавляет 2)
arr.splice(1,1, '1', '2')
    console.log(arr)
// удаляем и возвращаем в переменную
let rem= arr.splice(1,1)
    console.log(arr)
    console.log(rem)
// замена 
arr.splice(0, 1, 11)
    console.log(arr)
// добаление
arr.splice(0,0,22,55,44)
    console.log(arr)
// удаление элемента
arr.splice(-1, 1)
    console.log(arr)
// копирование части массива? yfxbyfz с 1 по3
let arr2 = arr.slice(1,3)
    console.log(arr2)
// копирование начиная с конца
arr2 = arr.slice(-4, -1) 
    console.log(arr2)
// копируем весь массив 
arr2 = arr.slice()
    console.log(arr2)
// дубль с дополнением
arr2 = arr.concat(8, 88, 99)
    console.log(arr2)
// ищет элемент с указанного индекса и возвращает индекс
console.log(arr.indexOf(55, 1))
// с конца
console.log(arr.lastIndexOf(44, -1))
// поиск возврвщает boolean
console.log(arr.includes(77))
// СОРТИРОВКА - проблема с цифрами     
console.log(arr2.sort())
console.log('8'>'22')
// сортировка для цифр 
console.log(arr2.sort((a,b) => a-b))
console.log(arr2.sort((a,b) => b-a))
var [ a, b ] = numbers.sort((a, b) => a - b) // 2 наименьших числа
// обратная сортировка
console.log(arr2.reverse())
// строка в массив
let str = '11, 22, 33'
let arr3 = str.split(',')
console.log(arr3)
// массив в строку
let st1 = arr2.join(',')
console.log(st1)
// string to PascalCase
function toPascalCase(str) {
    return str.replace(/(\w)(\w*)/g, function(_, first, rest) {
      return first.toUpperCase() + rest.toLowerCase();
    });
  }
//
// перебор элементов
for (let i=0; i< arr2.length; i++) {
    console.log(arr2[i])
}
//
for (let arrItem of arr) {
    console.log(arrItem)
}
//
arr.forEach (function (item, index, array) {
    console.log(`${item} находится на ${index} позиции в ${array}`);
})
// стрелочная функция + обратные кавычки
arr2.forEach ((item, index, array) => {
    console.log(`${item} находится на ${index} позиции в ${array}`);
})
//unique data in array
const uniqueArr = [...new Set(arr)];
// sum of array
const sum = arr.reduce((acc, curr) => acc + curr, 0);
//string to array(numbers), min max
const arr1 = str.split(" ").map(Number);
const min = Math.min(...arr1);
const max = Math.max(...arr1);
// str to arry with multydevides
const result = str.split(/[ ,;|]+/);
//
arr.flat() 
//метод об'єкта Array який повертає новий масив який містить всі елемент вкладених масивів до вказаної рівня вкладеності
//should remove all values from list a, which are present in list b keeping their order.
a.filter(item => !b.includes(item));
// фильтрация по индексу
arr.filter((_, i) => i % 2 === 0);












