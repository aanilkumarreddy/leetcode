/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function(head) {
    const res= new ListNode();
    let s=0;
    let resHead= res;
    head=head.next;
    while(head){
        if(head.val===0){
            resHead.next= new ListNode(s);
            resHead=resHead.next;
            s=0;
        }
        s=s+head.val;
        head=head.next;
    }
    return res.next;
    
};
