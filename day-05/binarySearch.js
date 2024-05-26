
// Write a function that performs a binary search on a sorted array.

const ary = [11,13,17,23,29,33,58,61,73,86,94];
const find = 13;

function binarySearch(array){
    let start = 0;
    let end = array.length-1;
    

    while(end > 0){
        let mid =  parseInt((start+end)/2);
        if(array[mid] == find){
            return  `${find} found at index-${mid} of the array [${array}]`
        }
        if(find < array[mid]){
            end = mid-1;
        } 
        
        if(find > array[mid]){
            start = mid+1;
        }
    }
    
    return `${find} cannot be found in the [${array}]`
}

console.log(binarySearch(ary));