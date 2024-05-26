
// this method works for both unique and repeated array

/*
1) UNION

if index is not zero and the last value of the union array is same as the current i-th element then increase the i.
otherwise push the element into union array and increase the i & idx by one.

2) INTERSECTION

if array-1 element  is lesser than array-2 element then increment i , else incremeny j.
if both are equal
    i) common array is length is zero, push array-1 value into common array and increment i&j.
   ii) incase array already have element check the last element is same as the array-1 element if true the increment i&j.

*/

let a = [ 1, 3, 2, 3, 3, 4, 5, 5, 6 ];
let b = [ 3, 3, 5 ];
let m = a.length;
let n = b.length;

function findUnion(a,b,m,n){
    let ary1 = a.sort((a,b) => a-b);
    let ary2 = b.sort((a,b) => a-b);
    let union = [];
    let i=0,j=0,idx=0;

    while(i < m && j < n){
        
      if(ary1[i] < ary2[j]){
          if(idx != 0 && ary1[i] == union[union.length-1]){
              i++;
          } else {
              union[idx] = ary1[i];
              i++;
              idx++;
          }
      } else {
          if(idx != 0 && ary2[j] == union[union.length-1]){
              j++;
          } else {
              union[idx] = ary2[j];
              j++;
              idx++;
          }
       }
   }

    //  remaining numbers
    while(i<m){
        if(idx != 0 && ary1[i] == union[union.length-1]){
              i++;
          } else {
              union[idx] = ary1[i];
              i++;
              idx++;
          }
    }
    
    while(j<n){
        if(idx != 0 && ary2[j] == union[union.length-1]){
              j++;
          } else {
              union[idx] = ary2[j];
              j++;
              idx++;
          }
    }
    
    return union
}

function findIntersection(a,b,m,n){
    let ary1 = a.sort((a,b) => a-b);
    let ary2 = b.sort((a,b) => a-b);
    let common = [];
    console.log(ary1,ary2,n)
   let i=0,j=0;
   while(i<m && j<n){
      if(ary1[i] < ary2[j]){
          i++;
      } else if( ary1[i] > ary2[j]){
          j++;
      } else {
          if(common.length !=0 && common[common.length-1] == ary1[i]){
              i++;
              j++;
          } else {
              common[common.length] = ary1[i];
              i++;
              j++;
          }
      }
   }
    
    return common
}

console.log(findUnion(a,b,m,n));
console.log(findIntersection(a,b,m,n));