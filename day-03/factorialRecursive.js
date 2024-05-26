
// Write a recursive function to calculate the factorial of a number.

function factorial(num){
    if(num === 1) return 1;
    return num * factorial(num-1);
}


console.log("factorial of 4 is ",factorial(4));
console.log("factorial of 5 is ",factorial(5));