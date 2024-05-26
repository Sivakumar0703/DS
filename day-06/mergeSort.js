
// Explain the concept of merge sort and implement it.

/*
    In merge sort we divide the entire array into sub-arrays then we sort the sub-arrays and merge it to 
get a completly sorted array.
*/

let array = [7,5,6,21,0,9,32,40,1];

function integer(num){
    let cal = num - num % 1;
    return cal  
}

function mergeSort(ary,left,right){
    if(left >= right){
        return 
    }
    let middle =  integer((right+left)/2);
    // let middle = left + parseInt((right-left)/2);
    mergeSort(ary,left,middle);
    mergeSort(ary,middle+1,right);
    return merge(ary,left,middle,right);
}

function merge(arr,left,mid,right){
    
    // defining length of sub array
    let sub1_length = mid-left+1; // why +1? because array index start from 0. (if mid=0; left=0;(mid - left) means we get 0.we can't have zero size array)
    let sub2_length = right - mid;
    
    // creating sub array
    let sub1 = [];
    let sub2 = [];
    for(let x=0; x<sub1_length; x++){ 
        sub1[x] = arr[x+left];
    }
    for(let y=0; y<sub2_length; y++){
        sub2[y] = arr[mid+1+y]; // why mid+1+y? => we divide the array into half .first half contain zero to mid. second half containd mid+ to end. in order to pick the continous element from mid+1 we give mid+1+y
    }
    // setting pointers for sub array1&2
    let i = 0;
    let j = 0;
    let k = left;
    
    // sorting the array
    while(i<sub1_length && j<sub2_length){
        if(sub1[i] < sub2[j]){
            arr[k] = sub1[i];
            i++; 
            k++;
        } else {
            arr[k] = sub2[j];
            j++; 
            k++;
        }
        
    }
    
    // check for excess element in sub array1&2
    while(i<sub1_length){
       arr[k] = sub1[i];
       i++; 
       k++; 
    }
    while(j<sub2_length){
       arr[k] = sub2[j];
       j++; 
       k++; 
    }
    
    return arr
    
}

let size = array.length - 1
console.log(mergeSort(array,0,size));
