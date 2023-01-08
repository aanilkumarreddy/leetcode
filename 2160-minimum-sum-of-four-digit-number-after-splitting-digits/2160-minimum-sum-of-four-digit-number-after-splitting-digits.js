/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
     let numArr= num.toString().split('').sort();
    return (parseInt(numArr[0]+numArr[2])+ parseInt(numArr[1]+numArr[3]));
};