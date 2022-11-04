/*
 * @lc app=leetcode id=237 lang=javascript
 *
 * [237] Delete Node in a Linked List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    let dummyNode = new ListNode(0);
    dummyNode.next = node;
    let prev = dummyNode;
    while (node.next) {
        node.val = node.next.val;
        prev = node;
        node = node.next;
    }
    prev.next = null;
};
// @lc code=end
