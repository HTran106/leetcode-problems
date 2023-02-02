/*
 * @lc app=leetcode id=25 lang=javascript
 *
 * [25] Reverse Nodes in k-Group
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
 * @param {number} k
 * @return {ListNode}
 */

const reverse = (prev, next) => {
    const last = prev.next;
    let curr = prev.next.next;
    while (curr !== next) {


var reverseKGroup = function(head, k) {
    const dummy = new ListNode(0, head);
    let prev = dummy;
    let curr = head;
    let count = 0;

    while (curr) {
        count++;
        if (count % k === 0) {
            prev = reverse(prev, curr.next);
            curr = prev.next;
        } else {
            curr = curr.next;
        }
    }
    return dummy.next;
};
// @lc code=end
