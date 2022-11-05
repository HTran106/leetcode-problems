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
var addTwoNumbers = function (l1, l2) {
    let dummy = new ListNode(0);
    let cur = dummy;
    let carry = 0;
    while (l1 || l2) {
        let sum = carry;
        if (l1) {
        sum += l1.val;
        l1 = l1.next;
        }
        if (l2) {
        sum += l2.val;
        l2 = l2.next;
        }
        carry = Math.floor(sum / 10);
        cur.next = new ListNode(sum % 10);
        cur = cur.next;
    }
    if (carry) {
        cur.next = new ListNode(carry);
    }
    return dummy.next;
};
// @lc code=end
