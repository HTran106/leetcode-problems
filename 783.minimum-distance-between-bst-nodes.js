/*
 * @lc app=leetcode id=783 lang=javascript
 *
 * [783] Minimum Distance Between BST Nodes
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
var minDiffInBST = function (root) {
    const values = [];
    const stack = [root]

    while (stack.length) {
        let curr = stack.pop()
        values.push(curr.val)
        if (curr.left) stack.push(curr.left)
        if (curr.right) stack.push(curr.right)
    }

    let min1 = Math.min(...values)
    values.splice(values.indexOf(Math.min(...values)), 1)
    let min2 = Math.min(...values)
    return Math.abs(min1 - min2)
};
// @lc code=end
