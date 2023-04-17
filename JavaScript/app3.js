// обратные кавычки
let tx1 = ' Hello !!!'
let tx2 = `${tx1} HI!`
console.log(tx2)
// ддобавление функции в строку
function someSum(a, b) {
    return a+b
}
console.log(`Summ: ${someSum(4,7)}`)
// многострочаня запись
tx1 = `Hello!
Nice to
meet you!`
console.log(tx1)
// перевод строки \n
// табуляция \t
// обратный слеш \\
// кавычки \'  \"
// вставка символа UTF-16, 32
tx1 = 'Hello ! \u0049 \u{1F60D}'
console.log(tx1)
// длина строки
console.log(tx1.length)
// символ строки
console.log(tx1[0])
console.log(tx1[tx1.length-5])
// регистр 
let tx3 = 'Hello!!!'
console.log(tx3.toLocaleLowerCase())
console.log(tx3.toLocaleUpperCase())
// поиск в строке
console.log(tx3.indexOf('el'))
console.log(tx3.includes('jk'))
console.log(tx3.startsWith('He'))
console.log(tx3.endsWith('!!'))
// часть строки
console.log(tx3.slice(0,3))
console.log(tx3.slice(-3,))
// сравнение 
console.log('a'>'A')



