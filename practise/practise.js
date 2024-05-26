
/*
1. Sort an array of 0s, 1s, and 2s using the Pointer Approach: 
Input: {0, 1, 2, 0, 1, 2}
Output: {0, 0, 1, 1, 2, 2}

solution : https://www.geeksforgeeks.org/sort-an-array-of-0s-1s-and-2s/

L pointer stays at first occurance of 1
mid pinter keep moves on when i see 1
R/high pointer will reduce by one when mid/i pointer meets 2 in its path


when 0 is spotted L and mid are swapped (L++;mid++)
when 1 is spotted (mid++)
when 2 is spotted (R/high--)
 */

// ********************************************************************************************************************
/*
2. Given an array arr[] of non-negative integers and an integer sum, find a subarray that adds to a given sum.
Input: arr[] = {1, 4, 20, 3, 10, 5}, sum = 33
Output: Sum found between indexes 2 and 4



 */

//************************************************************************************************************* */

// Q3. union of sorted array

/*


*/


// ******************************************************************************************

// Q3.2 Union of Two-Sorted Arrays by Handling duplicates in any of the arrays:

/*

*/

// **************************************************************************************************************

// Q 4. intersection of two sorted array w/o duplicates

/*

*/

// ************************************************************************************************************

// Q 5. find the sum that can be formed using given array
// i/p : [1,2,3,4,5,6] , sum = 6
// o/p : 1+2+3 , 1+5 , 2+4 , 6


// ********************************************************************************************************

// Q 6. find the largest number that can be made out of given array elements


// ***********************************************************************************************************
// Q 7. string reverse

/*
let str = "reverse this string";

function reverse(string){
    return  helper(string,0)
}

function helper(string,idx){
    if(string.length == idx) return ""

    return helper(string , idx + 1) + string[idx];
}

console.log(reverse(str))

*/

// ************************************************************************************************************

// Q 8. negative numbers at first followed by positive numbers



// **************************************************************************************************************