
// Write a function to find the common elements between two arrays.

const ary1 = [70,15,2,32,7,5];
const ary2 = [9,5,10,11,2,13,5,22];

function findCommonElement(a1,a2){
    let obj = {};
    let common = [];
    for(let i=0; i<a1.length; i++){
        if(obj[a1[i]]){
            obj[a1[i]] = obj[a1[i]] + 1;
        } else {
            obj[a1[i]] = 1;
        }
    }
    
    for(let i=0; i<a2.length; i++){
        if(obj[a2[i]] && obj[a1[i]] != 0){
            common[common.length] = a2[i];
            obj[a2[i]] = obj[a2[i]] - 1;
        } 
    }
    return common 
}

console.log(findCommonElement(ary1,ary2));