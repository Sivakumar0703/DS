
// Write a function to find the nth Fibonacci number using iteration.

let f1 = 0; 
let f2 = 1; 
function fibbo(n){
    if(n === 0) return f1;
    if(n === 1) return f2;
    let result;
  for(let i=2; i<=n ; i++){
    result = f1+f2;
    f1 = f2;
    f2 = result;
  }

  return result
}

console.log(fibbo(11));

