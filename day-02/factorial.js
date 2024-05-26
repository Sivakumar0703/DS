
// Write a function that takes a number as input and returns the factorial of that number.

function factorial(n){
    let fact = 1;
    for(let i=n; i>=2; i--){
        fact = fact * i;
    }
    return fact
}

console.log(factorial(8));