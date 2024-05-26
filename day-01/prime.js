
// Explain the concept of prime numbers and write a function to check if a given number is prime.

// Prime Number : A number which is divisible by one and itself only is called prime number, in other word 
// we can say a number must have two factor only


function isPrime(n){
    if(n === 0) return false;
    if(n === 1) return false;
    if(n === 2) return true;
    if(n % 2 === 0) return false;

    for(let i=3; i*i<=n; i=i+2){
        if(n % i === 0){
            return false;
        }
    }

    return true
}


console.log("Is 6 a prime ",isPrime(6));
console.log("Is 133 a prime ",isPrime(133));