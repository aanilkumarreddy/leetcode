function minimumOperations(nums: number[]): number {

    let count=0;

    for(let i=0;i<nums.length ;i++){
        if(nums[i]%3!==0){
            count=count+1
        }
    }
    return count;
    
};