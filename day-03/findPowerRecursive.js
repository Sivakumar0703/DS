
//  Write a recursive function to calculate the power of a number.

function findPower(num,pow){
    if(pow === 1) return num;
    if(pow === 0) return 1;
    return num*findPower(num,pow-1);
}

console.log("2 power 3 is ",findPower(2,3)); 
console.log("10 power 3 is ",findPower(10,3)); 
console.log("7 power 8 is ",findPower(7,8)); 
