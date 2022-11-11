/*
 * @lc app=leetcode id=111 lang=javascript
 *
 * [111] Minimum Depth of Binary Tree
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
 * @return {number}
 */
var minDepth = function (root) {
    let queue = [root];
    let depth = 1;

    while (queue.length) {
        let curr = queue.shift()
        if (curr.left) {
            queue.push(curr.left)
        } else {
            return depth
        }
        if (curr.right) {
            queue.push(curr.right)
        } else {
            return depth
        }
        depth++
    }
};
// @lc code=end
