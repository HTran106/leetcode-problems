/*
 * @lc app=leetcode id=530 lang=javascript
 *
 * [530] Minimum Absolute Difference in BST
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
var getMinimumDifference = function(root) {
    const queue = [root];
    const values = [];
    while (queue.length) {
        const curr = queue.shift()
        values.push(curr.val)
        if (curr.left) queue.push(curr.left)
        if (curr.right) queue.push(curr.right)
    }
    values.sort((a, b) => a - b)
    values.forEach((val, i) => {
        min = Math.min(min, Math.abs(val - values[i + 1]))
    })
    return min
};
// @lc code=end
