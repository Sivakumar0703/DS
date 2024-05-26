
// Write a function to find the second largest element in an array.

const ary = [8,5,46,2,12,0,6,9];

function secondLargest(array){
    let num = [0,0];
    for(let i=0; i<array.length; i++){
        if(array[i] > num[0]){ 
            num[1] = num[0];    
            num[0] = array[i];
        }else if(array[i] < num[0] && array[i] >= num[1]){
            num[1] = array[i]
        }
    }
    return num[1]
}

console.log(secondLargest(ary));