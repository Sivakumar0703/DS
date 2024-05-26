
// Write a function to reverse an array in place.

const ary = [1,2,3,4,5,6,7,8,9,10,11];

for(let start=0,end=ary.length-1; start < end; start++,end--){
    ary[start] = ary[start] + ary[end];
    ary[end] = ary[start] - ary[end];
    ary[start] = ary[start] - ary[end];
}

console.log(ary);