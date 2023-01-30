/*
 * @lc app=leetcode id=1022 lang=javascript
 *
 * [1022] Sum of Root To Leaf Binary Numbers
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
var sumRootToLeaf = function (root) {
    const paths = [];
    const path = [];
    const traverse = (node, path) => {
        if (!node) {
            return;
        }
        path.push(node.val);
        if (!node.left && !node.right) {
            paths.push(path.slice());
        }
        traverse(node.left, path);
        traverse(node.right, path);
        path.pop();
    };
    traverse(root, path);
    return paths.reduce((sum, path) => {
        return sum + parseInt(path.join(''), 2);
    }, 0);
};
// @lc code=end
