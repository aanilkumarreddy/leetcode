/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let sum=0;
    let prod= 1;
    
    while(n>0){
        let digit = n%10;
            console.log(digit);
        sum=sum+digit;
        prod= prod * digit;
        n=Math.floor(n/10);
    }
    return prod-sum;
};