/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
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
var swapPairs = function(head) {
    const dummyHead = new ListNode(null);
    dummyHead.next = head;
    let prev = dummyHead;
    let curr = head;
    while (curr !== null && curr.next !== null) {
        const next = curr.next;
        const nextNext = next.next;
        prev.next = next;
        next.next = curr;
        curr.next = nextNext;
        prev = curr;
        curr = nextNext;
    }
    return dummyHead.next;
};
// @lc code=end
