/*
 * @lc app=leetcode id=148 lang=javascript
 *
 * [148] Sort List
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
var sortList = function(head) {
    let curr = head;
    let prev = curr;

    while (curr) {
        if (curr.val >= curr.next.val) {
            curr.next = curr
            curr.next = prev
        }
        prev = curr
        curr = curr.next
    }
};
// @lc code=end
