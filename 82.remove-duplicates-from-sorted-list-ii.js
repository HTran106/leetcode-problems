/*
 * @lc app=leetcode id=82 lang=javascript
 *
 * [82] Remove Duplicates from Sorted List II
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
var deleteDuplicates = function(head) {
    if (!head || !head.next) {
        return head;
    }
    let dummy = new ListNode();
    dummy.next = head;
    let prev = dummy;
    let curr = head;
    while (curr) {
        while (curr.next && curr.val === curr.next.val) {
            curr = curr.next;
        }
        if (prev.next === curr) {
            prev = prev.next;
        } else {
            prev.next = curr.next;
        }
        curr = curr.next;
    }
    return dummy.next;
};

// @lc code=end
