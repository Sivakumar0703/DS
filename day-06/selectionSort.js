
//  Implement the selection sort algorithm.

const ary = [16,79,8,64,51,17,43,-5,82];

function selectionSort(ary){

    for(let i=0; i<ary.length; i++){
        let min = i;
        for(let j=min+1; j<ary.length; j++){
            if(ary[min] < ary[j]){ // change the symbol to '>' to sort in  ascending order
                min = j;
            }
        }

        if(i != min){
            ary[i] = ary[i] + ary[min];
            ary[min] = ary[i] - ary[min];
            ary[i] = ary[i] - ary[min];
        }
    }

    return ary

}

console.log(selectionSort(ary));

// for decending order
// 1) with the help of outer for loop we select the element from the array
// 2) the inner loop is used to find the largest number(greater than the current index element) 
// that can be found from the index i+1 to the end of the index
// 3) if any greater number is found then at the end of the inner loop we swap the place of selected number 
// and the largest number.

// eg: [4,8,0,6,9];
// index-0 => [4] => [9,8,0,6,4] => 4 & 9 are swapped
// index-1 => [8] => [9,8,0,6,4] => from index+1 to end of the array nothing is greater than 8. 
// index-2 => [0] => [9,8,6,0,4] => 0 & 6 are swapped
// index-3 => [0] => [9,8,6,4,0] => 0 & 4 are swapped
