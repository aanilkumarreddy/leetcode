/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function(root) {
    if(!root) return 0;
    let q=[root];
    while(q.length){
        let nxtLvl = [];
        let sum=0;
        for(let leaf of q){
            sum= sum+leaf.val;
            if(leaf.left) nxtLvl.push(leaf.left);
            if(leaf.right) nxtLvl.push(leaf.right);
        }
        if (!nxtLvl.length) return sum;
        q = nxtLvl;
    } 
};