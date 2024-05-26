
// Write a function to rotate an array to the right by k steps.

const ary = [1,2,3,4,5,6,7,8];
let k = 20;
k = k % ary.length;


function rotateArray(array,k,break_point){
  swap(array,0,break_point -1);
  swap(array,break_point,array.length-1);
  swap(array,0,array.length-1);
  return array
}

function swap(array,start,end){
  for(let i=start,j=end; i < j ; i++,j--){
  array[i] = array[i]+array[j];
  array[j] = array[i] - array[j];
  array[i] = array[i] - array[j];
 }  
}

console.log(rotateArray(ary,k,ary.length - k));