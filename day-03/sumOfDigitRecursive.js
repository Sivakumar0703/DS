
//  Write a recursive function to find the sum of digits of a number.

function sumOfDigit(num){
   if(num < 10) return num;
   let tempo = num % 10;
   return tempo + sumOfDigit ((num-tempo)/10)
}

console.log("sum of the digits 12345 is ",sumOfDigit(12345));
console.log("sum of the digits 8546 is ",sumOfDigit(8546));