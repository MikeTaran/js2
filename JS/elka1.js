// Завдання: https://shpp.gitbook.io/zero/tutorials/arrays/centered-thing
let i = 0;
let arr = [];
let str = "";
let max = 0;
let len;
let x;
let n = 0;

while (i < 20 && x != 0) {
    x = +prompt(
        `enter num(${i + 1}) (not more 20 times). If press \"0\" - Stop.`
    );

    if (x > 0) {
        if (x % 2) {
            arr[n] = x;
            n++;
        }
    }

    i++;
}

for (let i = 0; i < arr.length; i++) {
    //    console.put(arr[i] + " ");

    if (arr[i] > max) {
        max = arr[i];
    }
}

//console.log("max: " + max);

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < max; j++) {
        if ((arr[i] + 1) / 2 + j < (max + 1) / 2) {
            str = str + " ";
        }
    }

    for (let j = 0; j < arr[i]; j++) {
        str = str + "*";
    }

    document.write(str,'<br>');
    str = "";
}
