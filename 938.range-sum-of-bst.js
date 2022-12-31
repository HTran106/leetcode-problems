/*
 * @lc app=leetcode id=938 lang=javascript
 *
 * [938] Range Sum of BST
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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    if (!root) return
    if (root.val >= low && root.val <= high) {
        if (root.left) return root.val + rangeSumBST(root.left, low, high)
        if (root.right) return root.val + rangeSumBST(root.right, low, high)
    } else {
        if (root.left) return rangeSumBST(root.left, low, high)
        if (root.right) return rangeSumBST(root.right, low, high)
    }
};
// @lc code=end
