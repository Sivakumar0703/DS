
//  1 2 3
//  4 5 6
//  7 8 9

let mat = [ [1,2,3] , [4,5,6] , [7,8,9] ];
let row = mat.length;
let col = mat[0].length;

function transpose(mat,row,col){
    let tr = new Array(col);
    for(let i=0; i<col; i++){
      tr[i] = new Array(row);  
    }
    
    for(let i=0; i<row; i++){
        for(let j=0; j<col; j++){
            tr[j][i] = mat[i][j]
        }
    }
    return tr
}

console.log(transpose(mat,row,col)) 

//  1 4 7
//  2 5 8
//  3 6 9



