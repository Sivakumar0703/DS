
//  Write a function to find the largest element in an array.

const ary = [8,5,46,2,12,0,6,9];

function largestElement(array){
    let num = 0;
    for(let i=0; i<array.length; i++){
        if(array[i] > num){
            num = array[i];
        }
    }
    return num
}

console.log(largestElement(ary));