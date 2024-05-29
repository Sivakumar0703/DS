
// leetcode - 53
//  find the subarray with the largest sum
// kadane's algorithm

/*
Initially the sum is zero
we have sum the upcoming elements in the array.
two things can happen i) sum > 0 ii) sum < 0
if sum > 0 then we keep adding the next,next elements and check the sum is greater than max or not.if true we update maximum sum value.
if sum < 0 we set sum to zero and continue adding from that index.
*/

let ary = [5,6,-3,7,-13,8,-2,5,-6,7,-11,3,10,-10,-6,-10,7,2];

function findMaxSum(arr){
    let sum = 0;
    let mSum = 0; // maximum sum
    
    for(let i=0; i<arr.length; i++){
        if(sum >= 0){
            sum = sum + arr[i];
        } else {
            sum = 0;
            sum = sum + arr[i];
        }
        
        if(sum > mSum){
            mSum = sum;
        }
    }
    
    return mSum
}

console.log(findMaxSum(ary));
