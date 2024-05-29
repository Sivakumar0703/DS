
// two pointer approach

/*
lhb - left heighest building
rhb - right heighest building

water level = mimimum(lhb,rhb)
*/

let heights = [0,1,0,2,1,0,1,3,2,1,2,1];

function findTrappedWater(buildings){
    
    let l = 0;
    let r = buildings.length - 1;
    let lhb = buildings[l];
    let rhb = buildings[r];
    let res = 0;
    
    while( l <= r){
        
        // lhb <= rhb means lhb is the water level
        if(lhb <= rhb){
            // if the current building height is greater than lhb means it can't trap ant water
            if(buildings[l] >= lhb){
                lhb = buildings[l];
            } else {
                res = res + lhb - buildings[l];
            }
            
            l++
            
        } else {
            
            if(buildings[r] >= rhb){
                rhb = buildings[r];
            } else {
                res = res + rhb - buildings[r];
            }
            
            r--
           
        }
    }
    
    return res
}

console.log("trapped water are ",findTrappedWater(heights) , " units");
// time complexity : O(n)
// space complexity : O(1)