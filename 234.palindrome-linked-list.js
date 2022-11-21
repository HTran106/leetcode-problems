/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let dummy = new ListNode(null);
    let prev = null;
    let curr = head;
    while (curr) {
        prev = curr
        dummy.next = prev
        curr = dummy.next
    }
    console.log(head, dummy)
};
// @lc code=end
