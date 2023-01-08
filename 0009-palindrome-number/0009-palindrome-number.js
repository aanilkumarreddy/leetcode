var isPalindrome = function(x) {
    let rev=0;
    var original=x;
    while( x>0){
        const rem= x%10;
        rev= rev*10 + rem;
        x=Math.floor(x/10);
    };
    return original==rev;
};