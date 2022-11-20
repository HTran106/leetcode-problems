/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
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
var addTwoNumbers = function (l1, l2, carry=0) {
    if (l1 === null && l2 === null && carry === 0) return null;

    const val1 = l1 === null ? 0 : l1.val;
    const val2 = l2 === null ? 0 : l2.val;

    const sum = val1 + val2 + carry;
    const nextCarry = sum > 9 ? 1 : 0;
    const digit = sum % 10;
    const result = new ListNode(digit);

    const next1 = l1 === null ? null : l1.next
    const next2 = l2 === null ? null : l2.next

    result.next = addTwoNumbers(next1, next2, nextCarry);

    return result;
};
// @lc code=end
