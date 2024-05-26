
// union of two sorted unique array

// /*
let arr1 = [1, 3, 4, 5, 7]
let arr2 = [2, 3, 5, 6]
let union = [];
let i=0,j=0;

while(i < arr1.length && j < arr2.length){
    // if(union[union.length-1] != arr1[i]){
        if(arr1[i] < arr2[j]){
        union[union.length] = arr1[i];
        i++;
    } else if(arr1[i] > arr2[j]){
        union[union.length] = arr2[j];
        j++;
    } else {
        union[union.length] = arr1[i];
        i++;
        j++;
    }
    }
// }


   while(i < arr1.length ){
    //   if(union[union.length-1] != arr1[i]){
           union[union.length] = arr1[i];
    //   }
        i++; 
   }



   while(j < arr2.length){
    //    if( union[union.length-1] != arr2[j]){
           union[union.length] = arr2[j];
    //    }
        j++;
   } 


console.log(union)
// */

// **************************************************************************************************************

// intersection of two unique sorted array

/*
let arr1 = [1, 3, 4, 5, 7]
let arr2 = [2, 3, 5, 6]
let common = [];
let i=0,j=0;

while(i < arr1.length){
    
    if(arr1[i] == arr2[j] && common.length == 0){
        common[common.length] = arr1[i];
    } else {
        if(arr1[i] == arr2[j] && common[common.length-1] != arr1[i] ){
        common[common.length] = arr1[i];
    }
    }
    
    if( arr1[i] > arr2[j]){
        j++;
    } else {
        i++;
    }
    
}


console.log(common)

*/