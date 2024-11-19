function countPairs(nums: number[], target: number): number {
    
    let res=0;
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length;j++){
            if(i!==j){
                if(nums[i]+nums[j] <target){
                    res=res+1;
                }
            }
        }
    }
    return res/2;
};