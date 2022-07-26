/*
 * @lc app=leetcode id=111 lang=javascript
 *
 * [111] Minimum Depth of Binary Tree
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
var minDepth = function (root) {
    let queue = [root];
    let depth = 0;
    if (!root) return depth;
    while (queue.length) {
        let len = queue.length;
        depth++;
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            if (!node.left && !node.right) return depth;
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    return depth;
};
// @lc code=end
