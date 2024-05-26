
// Explain the Fibonacci series and write a function to generate the first n numbers in the Fibonacci sequence.

// Fibonacci sequence
// The fibonacci series is a sequence where each number is the sum of previous two numbers in the sequence.
// The first two number of the fibonacci series are 0 and 1.

let f1 = 0; 
let f2 = 1; 
function fibonacci(n){
    if(n < 0 ) return "Please Enter Positive Number"
    if(n === 0) return f1;
    if(n === 1) return f2;
  for(let i=2; i<=n ; i++){
    f2 = f1+f2;
    f1 = f2-f1;
  }
  return f2
}

console.log(fibonacci(15));
