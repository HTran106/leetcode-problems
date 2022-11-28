/*
 * @lc app=leetcode id=637 lang=javascript
 *
 * [637] Average of Levels in Binary Tree
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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    if (!root) return []
    let queue
    let result = []
    queue = [root]
    while (queue.length) {
        let sum = 0
        let count = queue.length
        for (let i = 0; i < count; i++) {
            let node = queue.shift()
            sum += node.val
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        result.push(sum / count)
    }
    return result
};
// @lc code=end
