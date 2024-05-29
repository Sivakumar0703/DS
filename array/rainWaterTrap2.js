
/*

1) creating two array i) leftmost heighest building ii) rightmost heighest building

leftmost heighest building:
i) the very first left building is the leftmost heighest building initially
ii) compare each building height with the leftmost heighest building. if
current building height is greater than leftmost heighest building
update the leftmost heighest building as the current building height
COMPARE => (building[i] , leftBuilding[i-1])

leftmost heighest building:
i) start from ending of buildings array
ii) the very last right building is the rightmost heighest building initially
COMPARE => (building[i] , rightBuilding[i+1])


*/

let heights = [4,2,0,3,2,5];

function findTrappedWater(buildings){
    // looping from 1 to n-2 becasue first and last building can't trap water
    let res = 0;
    let leftBuildings = new Array(buildings.length); // array that contain maximum height on the left side
    let rightBuildings = new Array(buildings.length); // array that contain maximum height on the right side
    
    leftBuildings[0] = buildings[0];
    rightBuildings[rightBuildings.length-1] = buildings[buildings.length-1];
    
    // finding the leftmost heighest buildings
    for(let i=1; i<buildings.length-1; i++){
        leftBuildings[i] = Math.max(buildings[i] , leftBuildings[i-1]);
    }
    
    // finding the rightmost heighest buildings
    for(let i=buildings.length-2; i>=0; i--){
        rightBuildings[i] = Math.max(buildings[i] , rightBuildings[i+1]);
    }

    for(let i=1; i<buildings.length-1; i++){
        //  trapped water = water level - height of the building
        res = res + Math.min(leftBuildings[i],rightBuildings[i]) - buildings[i];
    }
    
    return res    
       
}

console.log("trapped water are ",findTrappedWater(heights) , " units");
// time complexity : O(n)
// space complexity : O(n)