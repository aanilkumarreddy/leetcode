function getSneakyNumbers(nums: number[]): number[] {
    let res=[]
    
    for(let i=0;i<nums.length;i++){
        if( !res.includes(nums[i])&&nums.filter(ele=>ele===nums[i]).length===2){
            res.push(nums[i])
        }
        if(res.length>1){
            break;
        }
    }
    return res;

};