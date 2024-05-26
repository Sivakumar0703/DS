
//  Implement the insertion sort algorithm.

const array = [4,6,0,8,3,9];


function insertionSort(ary){
    for(let i=1; i<ary.length;i++){
    let temp = ary[i];
    let prev = i-1;
    
    while(prev >=0 && ary[prev] > temp){
        ary[prev+1] = ary[prev];
        prev--;
    }
    
    ary[prev+1] = temp;
  }
return ary
}

console.log(insertionSort(array));




// [ 5 | 4,10,1,6,2 ]  => [sorted | unsorted]
// store the current value in temp => temp = 4
// compare the current and previous value  =>  (previous) 5 >  4 (current)
// if previous element is greater than current then overwrite the current element
// [ _ | 5,10,1,6,2]
// check if you have any remaining element in place of sorted array
// here we have no other elements so we simply place the temp(4) value
// [ 4,5| 10,1,6,2]

// [ 4,5 | 10,1,6,2 ]  => [sorted | unsorted]
// store the current value in temp => temp = 10
// compare the current and previous value  =>  (previous) 5 >  10 (current)
// if previous element is greater than current then overwrite the current element
// (5 not greater than 10).fill the current index(2) with temp value(10).
// [ 4,5,10 | 1,6,2 ]

// [ 4,5,10 | 1,6,2 ]  => [sorted | unsorted]
// store the current value in temp => temp = 1
// compare the current and previous value  =>  (previous) 10 >  1 (current)
// if previous element is greater than current then overwrite the current element
// ii) while loop : (previous = 2)
//      previous + 1 = previous | (array[3] = 10) | [ 4,5,? | 10,6,2 ] | previous--
//      5 > 1 => true | (previous = 1)
//      previous + 1 = previous | (array[2] = 5) | [ 4,? | 5,10,6,2 ] | previous--
//      4 > 1 => true | (previous = 0)
//      previous + 1 = previous | (array[1] = 4) | [ ? | 4,5,10,6,2 ] | previous--
//      previous becomes less than 0 so while loop condition breaks
// fill the value in previous + 1 => (0+1) => array[0] = 1
// [ 1,4,5,10 | 6,2 ]