
//  find the sum that can be formed using given array
// i/p : [1,2,3,4,5,6] , sum = 6
// o/p : 1+2+3 , 1+5 , 2+4 , 6

function solve(n,value,sum,arr){
    if(sum == n){
        console.log(arr.join("+"))
        return
    }

    if(value > n){
        return
    }

    if(sum > n){
        return
    }

    solve(n,value+1,sum+value,[...arr,value])
    solve(n,value+1,sum,[...arr])

}

console.log(solve(6,1,0,[])) 