
let a = [ 1, 3, 2, 3, 3, 4, 5, 5, 6 ];
let b = [ 3, 3, 5 ];
let m = a.length;
let n = b.length;

function findUnion(a,b,m,n){
    let ary1 = a.sort((a,b) => a-b);
    let ary2 = b.sort((a,b) => a-b);
    let union = [];
    let i=0,j=0;
    
    while(i < m && j < n){
        if(ary1[i] < ary2[j]){
            if(union.length !=0 && union[union.length-1] == ary1[i]){
                i++;
            } else {
                union[union.length] = ary1[i];
                i++;
            }
        } else {
            if(union.length !=0 && union[union.length-1] == ary2[j]){
                j++;
            } else {
                union[union.length] = ary2[j];
                j++;
            }
        }
    }
    
    // remaining element
    while(i<m){
        if(union.length !=0 && union[union.length-1] == ary1[i]){
                i++;
            } else {
                union[union.length] = ary1[i];
                i++;
            }
    }
    
    while(j<n){
       if(union.length !=0 && union[union.length-1] == ary2[j]){
                j++;
            } else {
                union[union.length] = ary2[j];
                j++;
            } 
    }
    
    return union
}

function findIntersection(a,b,m,n){
    let ary1 = a.sort((a,b) => a-b);
    let ary2 = b.sort((a,b) => a-b);
    let common = [];
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

console.log("union",findUnion(a,b,m));
console.log("intersection",findIntersection(a,b,m,n));