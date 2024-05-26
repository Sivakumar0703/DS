
// Explain the concept of anagram and write a function to check if two strings are anagrams of each other.

// An anagram is a word or phrase formed by rearranging the letters of another word or phrase. 
// The key requirement is that all the original letters must be used exactly once.


function isAnagram(str1,str2){
    if(str1.length !== str2.length){
        return false
    }
   str1 =  str1.split("").sort();
   str2 = str2.split("").sort();
    for(let i=0; i<str1.length-1; i++){
        if(str1[i] !== str2[i]){
            return false
        }
    }

    return true
}

console.log(isAnagram("mad","dam"));
console.log(isAnagram("doctor","factor"));