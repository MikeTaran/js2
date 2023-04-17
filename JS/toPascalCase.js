function toPascalCase(str) {
    return str.replace(/(\w)(\w*)/g, function(_, first, rest) {
      return first.toUpperCase() + rest.toLowerCase();
    });
  }

let x = "Expected an empty string to return false"
x = toPascalCase(x);
x = x.replaceAll(" ", "");
x = '#' + x;
console.log(x);