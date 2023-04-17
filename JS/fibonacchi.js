function fib(n) {
   
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }
  
console.log( fib(5) ); // 2
 //
//  function nthFibo(n) {
//     if (n <= 0) {
//       return null;
//     }
//     if (n == 1) {
//       return 0;
//     }
//     let prev = 0;
//     let curr = 1;
//     for (let i = 2; i < n; i++) {
//       let next = prev + curr;
//       prev = curr;
//       curr = next;
//     }
//     return curr;
//   }
  console.log(nthFibo(5) )
//returns the nth number in the Fibonacci Sequence
  function nthFibo(n) {
    let [prev, curr] = [1, 1];
    for (let i = 1; i < n; i++) [prev, curr] = [curr, prev + curr];
    return prev;
  }

//returns the last digit of the nth element in the Fibonacci sequence:
  function getLastDigitOfFibonacci(n) {
  let prev = 1;
  let curr = 1;
  for (let i = 3; i <= n; i++) {
    let next = (prev + curr) % 10;
    prev = curr;
    curr = next;
  }
  return curr;
}
let n = 5;
let lastDigit = getLastDigitOfFibonacci(n);
console.log(lastDigit);