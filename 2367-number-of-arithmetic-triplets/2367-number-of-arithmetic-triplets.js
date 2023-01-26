/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
    let map = new Map();
    let count = 0;
    for(let i=0;i<nums.length;i++){
        let temp =  nums[i]-diff;
        if(map.has(temp) && map.has(temp-diff)){
            count++;
        }
        map.set(nums[i],'');
    }
    return count;
};