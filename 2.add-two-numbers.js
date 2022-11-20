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
    let curr1 = l1;
    let curr2 = l2;
    let num1 = ''
    let num2 = ''
    while (curr1 || curr2) {
        num1 += curr1.val
        num2 += curr2.val
        curr1 = curr1.next
        curr2 = curr2.next
    }
    num1 = +num1.split('').reverse().join('')
    num2 = +num2.split('').reverse().join('')
    let values = (num1 + num2).toString().split('')
    let head = new ListNode(values[0])
    for (let i = 1; i < values.length; i++) {}

};
// @lc code=end
