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
var sumRootToLeaf = function(root) {
    const path = [];
    const dfs = (node) => {
        if (!node) {
            return;
        }
        path.push(node.val);
        if (!node.left && !node.right) {
            path.push('end');
        }
        dfs(node.left);
        dfs(node.right);
        path.pop();
    }
    dfs(root);
    let sum = 0;
    let i = 0;
    while (i < path.length) {
        let num = 0;
        while (path[i] !== 'end') {
            num = num * 2 + path[i];
            i++;
        }
        sum += num;
        i++;
    }

};
// @lc code=end
