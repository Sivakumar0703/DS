
// find the maximum value of sub array by size k
// sliding window technique

/*
first add the first k size sub array
move the sub array towards right 
to keep the array size k , when we add an element from right side(array[i]) , we subtract the starting value in the index(i-k) 
*/


let ary = [2,9,31,-4,21,7];
let k = 3;

function findMaxSub(arr,k){
    // wSum - window sum ; mSum - maximum sum
    let wSum = 0;
    let mSum = -Infinity;
    
    for(let i=0; i<k; i++){
        wSum = wSum + arr[i];
    }
    
    // x = k ,  beacuse we have sum 0 to k.
    let x = k;
    while(x < arr.length){
       wSum = wSum - ary[x-k] + ary[x];
       if(wSum > mSum){
           mSum = wSum;
       }
       x++;
    }
    
    return mSum
}

console.log(findMaxSub(ary,k));