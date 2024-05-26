
//  Implement the bubble sort algorithm.

const ary = [16,79,8,64,51,17,43,-5,82];

function bubbleSort(array){
    for(let i=0; i<array.length; i++){
        for(let j=0; j<array.length; j++){
            if(array[j] > array[j+1]){ // change the symbol from < to > for sorting the array in ascending order
                array[j] = array[j] + array[j+1];
                array[j+1] = array[j] - array[j+1];
                array[j] = array[j] - array[j+1];
            }
        }
    }

    return array
}

console.log(bubbleSort(ary));

