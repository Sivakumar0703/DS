
// Write a function that finds the maximum and minimum elements in an array.

const ary = [44,14,26,75,12,3,7,59];

function minMax(arr){
    let min = arr[0];
    let max = arr[0];
    for(let i=0; i<arr.length-1; i++){
        if(max < arr[i]){
            max = arr[i];
        } else if(min > arr[i]){
            min = arr[i]
        }
    }
    return `Maximum-${max} and minimum-${min}`
}

console.log(minMax(ary));