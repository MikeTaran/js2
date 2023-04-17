let row = prompt('Введіть рядок з декількох слів');
 
let line = 0;
let wordNum = 0;
for (let i = 0,box; i < row.length; i++) {
    box = row.charCodeAt(i)
    if (box >= 65 && box <= 90 || box >= 97 && box <= 122) {
        line = true
    } else {
        wordNum += line;
        line = false;
    }
}
    if (wordNum == 0 && line) {
        wordNum = 1;
    } else  {
        wordNum++;
    }
    
console.log(`Кількість слів у рядку: ${wordNum}`);
 


