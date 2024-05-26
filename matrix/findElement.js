// find a element in sorted matrix

/*
using binary search to find the row where the element could possible lie.

again using binary search to find the element in that particulat row.
*/

let mat =  [ [1, 5, 9], [14, 20, 21], [30, 34, 43] ];
let find = 9;

let left = 0;
let right = mat.length-1;

function int(val){
    return val - val%1;
}

function findRow(matrix,left,right){
    let count = matrix[0].length;
    while(left <= right){
        let mid = int((left+right)/2);

        if(find >= matrix[mid][0] && find <= matrix[mid][count-1]){
           let result = binarySearch(matrix[mid],0,count-1)
           console.log(result,"result")
           if(result >=0 ){
               return `${find} is located at [${[mid]}] [${[result]}]`
           } else {
               return -1
           }
        }
        if(find < matrix[mid][0]){
            right = mid-1;
        }
        if(find > matrix[mid][0]){
            left = mid+1;
        }
        
        
    }
    
    return -1
}

function binarySearch(arr , left ,right){
    while(left <= right){
        let mid = int((left+right)/2)
        if(arr[mid] == find){
            return mid
        }
        if(find < arr[mid]){
            right = mid-1;
        }
        if(find > arr[mid]){
            left = mid+1;
        }
    }
    return -1
}


console.log(findRow(mat,left,right));