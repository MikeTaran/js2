function fib(n) {
   
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
  }
  
console.log( fib(4) ); // 2
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
  console.log(nthFibo(4) )
//returns the nth number in the Fibonacci Sequence
  function nthFibo(n) {
    let [prev, curr] = [0, 1];
    for (let i = 1; i < n; i++) [prev, curr] = [curr, prev + curr];
    return prev;
  }