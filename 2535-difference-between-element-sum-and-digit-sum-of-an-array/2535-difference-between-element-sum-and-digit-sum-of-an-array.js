/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let sum=0;
    let sumOfDigits=0;
    for(let i=0;i<nums.length;i++){
        sum=sum+nums[i];
        if(nums[i]>9){
            sumOfDigits=sumOfDigits+getSum(nums[i]);
        }else{
            sumOfDigits=sumOfDigits+nums[i];
        }
        
    }
    return Math.abs(sum-sumOfDigits);
    
};

function getSum(n) {
    let sum=0;
    while(n>0){
        sum=sum+(n%10);
        n=parseInt(n/10);
    }
    return sum
}