
//  Write a function that performs a linear search on an array.


const ary = [55,87,36,91,2,64,32,48,101,529,6];
const find = 64;

function linearSearch(array){
    for(let i=0; i<array.length; i++){
        if(array[i] == find){
            return `${find} is present at index-${i} of the array [${array}]`   
        }
    }

    return `${find} cannot be found in the array [${array}]`
}

console.log(linearSearch(ary));