
// find union and intersection of two unsorted array(w/o repetation)

/*
find the minimum length array and sort it using merge sort
loop the largest array to find union and intersection
use binary search for searching the element from the largest array while looping 
*/

let arr1 = [7, 1, 5, 2, 3, 6];
let arr2 = [3, 8, 6, 20, 7];

function int(num){
    return num - num%1
}

function binarySearch(arr , left , right , find){
    while(left <= right){
        let mid = int((left+right)/2);
        if(arr[mid] == find){
            return mid
        }
        
        if(arr[mid] < find){
           left = mid+1;
        }
        
        if(arr[mid] > find){
            right = mid-1;
        }
    }       
 return -1
}

function mergeSort(ary,left,right){
    if(left >= right){
        return
    }
    let mid = int((left+right)/2);
    mergeSort(ary,left,mid);
    mergeSort(ary,mid+1,right);
    return merge(ary,left,mid,right)
}

function merge(arr,left,mid,right){
    let a1 = [];
    let a2 = [];
    let a1_length = mid - left+1;
    let a2_length = right-mid;
    
    for(let x=0; x<a1_length; x++){
        a1[x] = arr[x+left];
    }
    for(let y=0; y<a2_length; y++){
        a2[y] = arr[y+mid+1];
    }
    
    // pointers
    let i=0;
    let j=0;
    let k=left;
    while(i<a1_length && j<a2_length){
        if(a1[i] < a2[j]){
            arr[k] = a1[i];
            i++;
            k++;
        } else {
            arr[k] = a2[j];
            j++;
            k++;
        }
    }
    
    // push remaining elements
    while(i<a1_length){
        arr[k] = a1[i];
            i++;
            k++;
    }
    while(j<a2_length){
        arr[k] = a2[j];
            j++;
            k++;
    }
    
    return arr
}

function findUnion(a1,a2){
    let temp_array;
    // converting a1 as the smallest array
    if(a2.length < a1.length){
        temp_array = a1;
        a1 = a2;
        a2 = temp_array;
    }
    let result = [...a1];
    a1 = mergeSort(a1,0,a1.length-1)
    // looping the largest array and find the element in min_array
    for(let z=0; z<a2.length; z++){
        if(binarySearch(a1,0,a1.length-1,a2[z]) == -1){
            result[result.length] = a2[z];
        }
    }
    
    return result
    
}

function findIntersection(a1,a2){
    let temp_array;
    // converting a1 as the smallest array
    if(a2.length < a1.length){
        temp_array = a1;
        a1 = a2;
        a2 = temp_array;
    }
    let result = [];
    a1 = mergeSort(a1,0,a1.length-1)
    // looping the largest array and find the element in min_array
    for(let z=0; z<a2.length; z++){
        let idx = binarySearch(a1,0,a1.length-1,a2[z]);
        if(idx != -1){
            result[result.length] = a2[z];
        }
    }
    
    return result
    
}

console.log("union of array  ",findUnion(arr1,arr2))
console.log("intersection of array  ",findIntersection(arr1,arr2))
// ***************************************************************************************************************

/*
    why we can't use min_array to find the smallest array?
        if use seperate variable(min_array) to store the smallest array then 
    we have problem while looping the largest array.

    we have no clue about finding the smallest array. it can be either a1 or a2.
    
    To solve this problem we interchange the a1 & a2 based on the smallest array. 
*/

/*
function findUnion(a1,a2){
    let min_array;
    if(a1.length < a2.length){
        min_array = a1;
    } else {
        min_array = a2;
    }
    
    min_array = mergeSort(min_array,0,min_array.length-1)
    
    // looping the largest array and find the element in min_array
    for(let z=0; z<?????????)
    
}
*/

// *****************************************************************************************************************

// method - 2
// we can sort both the array and find union and intersection

/*
function printUnion(arr1, arr2, m, n){
    arr1.sort(function(a, b){return a-b;});
    arr2.sort(function(a,b){return a-b;});
    let i = 0;
    let j = 0;
    while(i < m && j < n){
        if(arr1[i] < arr2[j])
            document.write(arr1[i++] + " ");
        else if(arr2[j] < arr1[i])
            document.write(arr2[j++] + " ");
        else{
            document.write(arr2[j++] + " ");
            i++;
        }
    }
     
    // printing remaining elements of the larger array
    while(i < m)
        document.write(arr1[i++] + " ");
    while(j < n)
        document.write(arr2[j++] + " ");
    return 0;
}
*/