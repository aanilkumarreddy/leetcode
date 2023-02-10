/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let newArr= [...nums];
    let res=[];
    let sorted= newArr.sort((a,b)=>a-b);
    for(let i in nums){
    res.push(sorted.indexOf(nums[i]));
}
    return res;
};
