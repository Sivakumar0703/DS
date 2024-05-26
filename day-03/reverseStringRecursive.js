
// Write a recursive function to reverse a string.


function reverse(string){
    return helpToReverse(string,0);
}

function helpToReverse(str,idx){
    if(idx >= str.length) return "";
    return helpToReverse(str , idx+1)+str[idx];
}

console.log("tamil nadu" , reverse("tamil nadu"));
console.log("india" , reverse("india"));


// method-2

// function reverse(string , length){
//     if(length < 0) return;
//     if(length === 1) return string[0];
//     return string[length-1]+reverse(string , length-1);
// }

// console.log("tamil nadu" , reverse("tamil nadu","tamil nadu".length));
