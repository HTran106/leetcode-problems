/*
 * @lc app=leetcode id=1290 lang=javascript
 *
 * [1290] Convert Binary Number in a Linked List to Integer
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
 * @return {number}
 */
var getDecimalValue = function(head) {
    const arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }
    return parseInt(arr.join(''), 2);
};
// @lc code=end
