/*
 * @lc app=leetcode id=501 lang=javascript
 *
 * [501] Find Mode in Binary Search Tree
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
var findMode = function(root, data={}) {
    if (!root) return
    if (root.val in data) {
        data[root.val]++
    }
    else {
        data[root.val] = 1
    }
    findMode(root.left, data)
    findMode(root.right, data)
    return Object.keys(data).filter(key => data[key] === Math.max(...Object.values(data))).map(key => parseInt(key))
};
// @lc code=end
