
/*

1) first and last bar can't store any water
2) level of water stored is equal to the left most heighets building height
3) to find howmuch of water is sorored? level of water - height of the building

base case:
i) if we have only one building or two building we can't store water
ii) if the building height is in ascending order water can't be stored
iii) if the building height is in decending order water can't be stored

algorithm:
1) find left and right building
2) find water level (minimum of left or right building)
3) find trapped water(water level - height of the current building)
4) add all trapped water

*/

let heights = [4,2,0,3,2,5];

function findTrappedWater(buildings){
    // looping from 1 to n-2 becasue first and last building can't trap water
    let res = 0;
    for(let i=1; i<=buildings.length-2; i++){
        
        let lb = buildings[i]; // lb - left building
        
        // looping from zero to i-1 => to find the leftmost heighest building
        for(let j=0; j<i; j++){
            if(buildings[j] > lb){
                lb = buildings[j];
            }
        }
        
         let rb = buildings[i]; // rb - right building
         
         // looping from  i+1 to end  => to find the rightmost heighest building
        for(let j=i+1; j<buildings.length; j++){
            if(buildings[j] > rb){
                rb = buildings[j];
            }
        }
        
        // finding water level
        let wl; // wl - water level
        lb < rb ? wl = lb : wl = rb
        
        // find trapped water
        let tw = wl - buildings[i]; // tw - trapped water
        
        // update trapped water
        res = res + tw;
    }
    
    return res
}

console.log("trapped water are ",findTrappedWater(heights) , " units")
// time complexity = O(n^2)
// space complexity = O(1)