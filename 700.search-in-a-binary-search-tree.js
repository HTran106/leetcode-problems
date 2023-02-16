/*
 * @lc app=leetcode id=700 lang=javascript
 *
 * [700] Search in a Binary Search Tree
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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    const res = []
    const queue = [root]
    let found = false
    while (!found) {
        const curr = queue.pop()
        if (curr.val === val) {
            res.push(curr.val)
            res.push(curr.left.val)
            res.push(curr.right.val)
            return res
        } else {
            if (curr.left) queue.push(curr.left)
        }

    }
};
// @lc code=end
