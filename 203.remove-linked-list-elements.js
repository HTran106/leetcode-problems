/*
 * @lc app=leetcode id=203 lang=javascript
 *
 * [203] Remove Linked List Elements
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let currNode = head;
    let prevNode = null;
    while (currNode) {
        if (currNode.val === val) {
            if (prevNode) {
                prevNode.next = currNode.next;
            } else {
                head = currNode.next;
            }
        } else {
            prevNode = currNode;
        }
        currNode = currNode.next;
    }
    return head;
};
// @lc code=end
