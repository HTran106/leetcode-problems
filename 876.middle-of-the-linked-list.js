/*
 * @lc app=leetcode id=876 lang=javascript
 *
 * [876] Middle of the Linked List
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
var middleNode = function(head) {
    // let count = 1;
    // let curr = head;
    // while (curr) {
    //     count++
    //     curr = curr.next
    // }
    // count = Math.ceil(count / 2)
    // curr = head
    // while (curr) {
    //     if (count === 1) return curr
    //     curr = curr.next
    //     count--
    // }
    let slow = head
    let fast = head
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    return slow
};
// @lc code=end
