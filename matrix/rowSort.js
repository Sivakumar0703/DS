let mat = [[ 9, 8, 7, 1 ],
        [ 7, 3, 0, 2 ],
        [ 9, 5, 3, 2 ],
        [ 6, 3, 1, 2 ]];
        
function bubbleSort(ary){
    for(let i=0; i<ary.length; i++){
        for(let j=0; j<ary.length; j++){
            if(ary[j] > ary[j+1]){
                let temp = ary[j+1];
                ary[j+1] = ary[j];
                ary[j] = temp;
            }
        }
    }
    
    return ary
}

function matrixRowSort(matrix){
    for(let i=0; i<matrix.length; i++){
        matrix[i] = bubbleSort(matrix[i]);
    }
    return matrix
}

console.log(...matrixRowSort(mat))