/*
 * @lc app=leetcode id=257 lang=javascript
 *
 * [257] Binary Tree Paths
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if (!root) return []
    if (!root.left && !root.right) return [root.val.toString()]
    return binaryTreePaths(root.left).map(path => `${root.val}->${path}`).concat(binaryTreePaths(root.right).map(path => `${root.val}->${path}`))
};
// @lc code=end
