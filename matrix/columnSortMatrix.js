
// let mat = [ 
//     [1,6],
//     [8,4],
//     [9,7],
// ];

let mat = [ [1, 6, 10], [8, 5, 9], [9, 4, 15], [7, 3, 60] ];

function transpose(matrix){
    let row = matrix.length;
    let col = matrix[0].length;
    let tr = [];
    for(let i=0; i<col; i++){
        tr[i] = new Array(row);
    }
    for(let i=0; i<row; i++){
        for(let j=0; j<col; j++){
            tr[j][i] = matrix[i][j]
        }
    }
    
    return tr
}

function bubbleSort(ary){
    for(let i=0; i<ary.length; i++){
        for(let j=0; j<ary.length; j++){
            if(ary[j] > ary[j+1]){
                let temp = ary[j];
                ary[j] = ary[j+1];
                ary[j+1] = temp;
            }
        }
    }
    return ary
}

let newMatrix = transpose(mat);
for(let i=0; i<newMatrix.length; i++){
    bubbleSort(newMatrix[i]);
}
console.log(...transpose(newMatrix))