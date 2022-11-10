/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let curr = head;
    let prev = null;

    let i = 0;
    while (curr) {
        if (n - i === 0) {
            prev = curr.next
            curr = curr.next.next
        }
        curr = curr.next
        prev = curr
        i++
    }
    return head
};
// @lc code=end
