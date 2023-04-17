const input1 = document.querySelector('.i-1');
const input21 = document.querySelector(".i-21");
const input22 = document.querySelector(".i-22");
//
const output1 = document.querySelector(".out-1");
const output2 = document.querySelector(".out-2");
const output3 = document.querySelector(".out-3");
//
const button1 = document.querySelector(".b-1");
const button2 = document.querySelector(".b-2");
const button3 = document.querySelector(".b-3");
//task1
button1.onclick = () => {
let inp1 = input1.value;
output1.style.backgroundColor = '#e8eda1'
output1.innerHTML = inp1;
}
//task2
button2.onclick = () => {
    let a21 = 21, a22 = 22;
    (a22>a21)? output2.innerHTML = a22: output2.innerHTML = a21;
    output2.style.backgroundColor = '#e8eda1'
}
//task3
button3.onclick = () => {
    let num1 = input21.value;
    let num2 = input22.value;
    if(num1>num2){
        output3.innerHTML = num1;
    }else {
        output3.innerHTML = num2;
    }
    // output3.style.backgroundColor = '#e8eda1'
}
// task4-1
let button41 = document.querySelector('.b-41');
let input41 = document.querySelector('.i-41');
let output41 = document.querySelector('.out-41');
//
button41.onclick = () => {
let col = input41.value
output41.innerHTML = col;
}
// range
document.querySelector('#rng').oninput = () => {
document.querySelector('span').innerHTML = document.querySelector('#rng').value;
}
// checkbox
document.querySelector('.b-42').onclick = () => {
console.log(
    document.querySelector('#chc1').checked
);
}
//