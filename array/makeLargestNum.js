
//  find the largest number that can be made out of given array elements

let input = [77, 0, 65, 8, 51, 2, 10, 9];
let input2 = [3,30,34,9];
let result = '';

for(let i=0; i<input.length; i++){
    for(let j=i+1; j<input.length;j++){
        let xy = ''+input[i]+input[j];
        let yx = ''+input[j]+input[i];
        if(yx > xy){
            input[i] = input[i] + input[j];
            input[j] = input[i] - input[j];
            input[i] = input[i] - input[j];
        }
    }
}

for(let i=0; i<input.length; i++){
    result += input[i]; 
}

console.log(result)


//method-2
// 1, 34, 3, 98, 9, 76, 45, 4
// 9-98-76-4-54-34-3-1
// console.log(input.sort().reverse().join(''))