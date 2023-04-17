//let str = "{}((({}{[]}{}{[[[]]]}{}{})))"
let str = "[({})](]"
//
function isBracketsValid_1(str) {
	if(str.length % 2!=0) return false;
	for (let i = 0; i <= str.length; i++) {
		str = str.replaceAll("()", "");
		str = str.replaceAll("[]", "");
		str = str.replaceAll("{}", "");
	}
	return str.length === 0
}
console.log(isBracketsValid_1(str));
//
function isBracketsValid_2(str) {
	const arr = []
	const start = ['{','[','('] 
	const end = ['}',']',')']
	for (let char of str) {
	 if (start.includes(char)) 
		arr.push(char)
	  else if (end.includes(char))
		if (arr[arr.length-1] === start[end.indexOf(char)])
		  arr.pop()
		else
		  return false
	}
	return arr.length === 0
	}
//
console.log(isBracketsValid_2(str));
//
function isBracketsValid_3(str){
	var prev = "";
	while (str.length != prev.length) {
            prev = str;
            str = str
                .replace("()", "")
                .replace("[]", "")
                .replace("{}", "");                
    }
    return (str.length === 0);
}
console.log(isBracketsValid_3(str));