
// Write a function to merge two sorted arrays into a single sorted array.

let array1 = [1,2,5,8];
let array2 = [0,4,7,12,15];
let result = [];
let left = 0;
let right = 0;


while(left < array1.length && right < array2.length){
    if(array1[left] < array2[right]){
        result[result.length] = array1[left];
        left++;
    } else {
        result[result.length] = array2[right];
        right++;
    }
}

// if any left over in array1 then we are pushing it to result array
while(left < array1.length){
    result[result.length] = array1[left];
    left++;
}

// if any left over in array2 then we are pushing it to result array
while(right < array2.length){
    result[result.length] = array2[right];
    right++;
}

console.log(result);