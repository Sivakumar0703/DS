
// Write a function that checks if a given string is a palindrome.

function isPalindrome(string){
 let start = 0;
 let end = string.length - 1;
 while(start < end){
    if(string[start] !== string[end]){
        return false
    }
    start++;
    end--;
 }
 return true
}

console.log(isPalindrome("APPA"));
console.log(isPalindrome("MADAM"));
console.log(isPalindrome("CARTOON"));
