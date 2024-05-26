
//  Write a recursive function to calculate the nth Fibonacci number. 

function recursiveFibonnaci(n){
    if(n === 0) return 0;
    if(n === 1) return 1;
    if(n === 2) return 1;
    if(n > 2)  {
        return  recursiveFibonnaci(n-1)+recursiveFibonnaci(n-2)
    }  
}

console.log("fibonnaci of 8th term is ",recursiveFibonnaci(8));
console.log("fibonnaci of 20th term is ",recursiveFibonnaci(20));