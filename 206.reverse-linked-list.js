/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let currNode = head
    let prevNode = null
    while (currNode) {
        let nextNode = currNode.next
        currNode.next = prevNode
        prevNode = currNode
        currNode = nextNode
    }
    return prevNode
};
// @lc code=end
