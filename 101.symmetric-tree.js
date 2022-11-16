/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
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
 * @return {boolean}
 *

 */

var isMirror = function (left, right) {
    if (left === null && right === null) return true;
    if (left === null || right === null) return false;
    return left.val === right.val && isMirror(left.left, right.right) && isMirror(left.right, right.left);
}
var isSymmetric = function (root) {
    if (!root) return true
    return isMirror(root.left, root.right)
};
// @lc code=end
