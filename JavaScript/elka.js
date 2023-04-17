let size = +prompt("Введіть висоту ялинки");

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size - i - 1; j++) {
        document.write(" ");
    }

    for (let j = 0; j < i * 2 + 1; j++) {
            document.write("*");
    }

    document.write("");
}

for (let i = 0; i < size - 1; i++) {
    document.write(" ");
}

if (size > 0) {
    document.write("*")
}