/*
 * @lc app=leetcode id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    insert(node) {
        this.heap.push(node);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex].val > this.heap[index].val) {
                this.swap(parentIndex, index);
                

var mergeKLists = function(lists) {
    const  dummy = new ListNode();
    let current = dummy;
    const heap = new MinHeap();

    for (let i = 0; i < lists.length; i++) {
        if (lists[i]) {
            heap.insert(lists[i]);
        }
    }

    while (heap.size() > 0) {
        const node = heap.extract();
        current.next = node;
        current = current.next;
        if (node.next) {
            heap.insert(node.next);
        }
    }

    return dummy.next;
};
// @lc code=end
