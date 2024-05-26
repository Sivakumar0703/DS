
// negative numbers at first followed by positive numbers


let arr = [7,-3,9,-5,-8,14,-33,12];
let obj = {};
let result =[];

for(let i=0; i<arr.length; i++){
    obj[arr[i]] = true;
}

for(let key in obj){
    result[result.length] = key;
}

console.log(result);

// we can also do the same by pushing all the positive numbers into the array at one
// for loop then we use another for loop to push the negative values 