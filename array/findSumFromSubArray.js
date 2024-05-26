
// Given an array arr[] of non-negative integers and an integer sum, find a subarray that adds to a given sum.
// Input: arr[] = {1, 4, 20, 3, 10, 5}, sum = 33
// Output: Sum found between indexes 2 and 4

let arr = [1, 4, 20, 3, 10, 5];
let arr2 = [1, 4, 0, 0, 3, 10, 5];


function findSubArray(array,sum){
    let add = 0;
    for(let i=0; i<array.length; i++){
        for(let j=i; j<array.length;j++){
            add = add + array[j];
            if(add == sum){
                return [i,j]
            } else if(add > sum){
                add = 0;
                break;
            }
        }
    }
    
    return -1
    
}

console.log(findSubArray(arr,33))
console.log(findSubArray(arr2,7))

// pointer approach
function findSubArrayPointer(array,sum){
    
    let start=0,end = 0;
    let add = 0;
    
    while(end < array.length){
        add = add + array[end];
        if(add == sum){
            return [start,end]
        } else if(add > sum){
            add = 0;
            start = start + 1;
            end = start;
           
        } else {
            end++
        }
    }
    
    return -1
}

console.log(findSubArrayPointer(arr,33))
console.log(findSubArrayPointer(arr2,7))