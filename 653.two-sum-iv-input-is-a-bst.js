/*
 * @lc app=leetcode id=653 lang=javascript
 *
 * [653] Two Sum IV - Input is a BST
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    let queue1 = [root]
    let queue2 = []
    let set = new Set()
    while (queue1.length > 0) {
        let node = queue1.shift()
        if (set.has(k - node.val)) {
            return true
        }
        set.add(node.val)
        if (node.left) {
            queue2.push(node.left)
        }
        if (node.right) {
            queue2.push(node.right)
        }
        if (queue1.length === 0) {
            queue1 = queue2
            queue2 = []
        }
    }
    return false
};
// @lc code=end
