/*
 * @lc app=leetcode id=100 lang=javascript
 *
 * [100] Same Tree
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    const stack = [p, q]
    while (stack.length) {
        const p = stack.pop()
        const q = stack.pop()
        if (!p && !q) continue
        if (!p || !q) return false
        if (p.val !== q.val) return false
        stack.push(p.left, q.left)
        stack.push(p.right, q.right)
    }
    return true
};
// @lc code=end
