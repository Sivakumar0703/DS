
// union of two array with duplicates

// const arr1 = [1, 2, 2, 2, 3];    
const arr1 = [1, 2, 2, 2, 3,6];    
const arr2 = [2, 3, 3, 4, 5, 5];
let union = [];

let i=0,j=0;

while(i < arr1.length && j < arr2.length){
    
    // for arr1
    if(arr1[i] < arr2[j] ){
        if(union.length == 0){
            union[union.length] = arr1[i];
            i++;
        } else {
            if( union[union.length - 1] < arr1[i] && union[union.length - 1] != arr1[i]){
                union[union.length] = arr1[i];
                i++;
            } else {
                i++;
            }
        }
    } else { // for arr2
        if(union.length == 0){
            union[union.length] = arr2[j];
            j++;
        } else {
            if( union[union.length - 1] < arr2[j] && union[union.length - 1] != arr2[j]){
                union[union.length] = arr2[j];
                j++;
            } else {
                j++;
            }
        }
    }
}

// remaining elements in array
while(i<arr1.length){
         if( union[union.length - 1] < arr1[i] && union[union.length - 1] != arr1[i]){
                union[union.length] = arr1[i];
                i++;
            } else {
                i++;
            }
    }
    
    while(j<arr2.length){
        if( union[union.length - 1] < arr2[j] && union[union.length - 1] != arr2[j]){
                union[union.length] = arr2[j];
                j++;
            } else {
                j++;
            }
    }

console.log(union)

// for intersection refer common file