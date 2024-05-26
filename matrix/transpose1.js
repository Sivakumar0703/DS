// in place transpose
// it is only applicable for square matrix (where row and column are equal)

let mat = [ 
    [1,2,3,4,5],
    [6,7,8,9,10],
    [11,12,13,14,15],
    [16,17,18,19,20],
    [21,22,23,24,25]
];
let n = mat.length;


function transpose(mat,n){
    
    for(let i=0; i<n; i++){
        for(let j=i+1; j<n; j++){
            console.log(i,j, "-----------" , j,i)
            mat[i][j] = mat[i][j] + mat[j][i];
            mat[j][i] = mat[i][j] - mat[j][i];
            mat[i][j] = mat[i][j] - mat[j][i];
        }
    }
 
    return mat
}

console.log(transpose(mat,n))

// note : diagonal elements remains in same place