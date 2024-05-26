
// Write a function to calculate the factorial of a number using iteration.

function factorial(n){
    let fact = 1;
    for(let i=n; i>=2; i--){
        fact = fact * i;
    }
    return fact
}

console.log(factorial(6));