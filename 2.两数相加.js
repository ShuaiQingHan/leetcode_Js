/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let resNode = new ListNode(0); 
    let result = resNode; 
    let tmpS = 0; 
    while(l1 || l2 || tmpS) { 
        let val1 = l1 ? l1.val || 0 : 0; 
        let val2 = l2 ? l2.val || 0 : 0; 
        let sum = val1 + val2 + tmpS; 
        tmpS = sum >= 10 ? 1 : 0; 
        sum = sum % 10; 
        if(l1) l1 = l1.next; 
        if(l2) l2 = l2.next; 
        resNode.next = new ListNode(sum); 
        resNode = resNode.next; 
    }
    return result.next; 
};
var addTwoNumbers = function(l1,l2){
    var List = new ListNode(0);
    var head = List;
    var sum = 0;
    var carry = 0;
    while(l1!==null || l2!==null || sum > 0){
        if(l1 !==null){
            sum = sum + l1.val;
            l1 = l1.next;
        }
    }
}
// @lc code=end

