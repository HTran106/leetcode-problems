/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let dummyHead = new ListNode()
    let curr = dummyHead
    while (list1 && list2) {
        if (list1.val < list2.val) {
            curr.next = list1
            list1 = list1.next
        } else {
            curr.next = list2
            list2 = list2.next
        }
        curr = curr.next
    }
    curr.next = list1 || list2
    return dummyHead.next
};
// @lc code=end





// const dummy = new ListNode();
// let cur = dummy;
// while (list1 && list2) {
//     if (list1.val < list2.val) {
//         cur.next = list1;
//         list1 = list1.next;
//     } else {
//         cur.next = list2;
//         list2 = list2.next;
//     }
//     cur = cur.next;
// }
// cur.next = list1 || list2;
// return dummy.next;
