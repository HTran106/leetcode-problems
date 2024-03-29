/*
 * @lc app=leetcode id=993 lang=javascript
 *
 * [993] Cousins in Binary Tree
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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    const queue = [root];
    while (queue.length) {
        const size = queue.length;
        let foundX = false;
        let foundY = false;
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            if (node.left && node.right) {
                if (node.left.val === x && node.right.val === y) return false;
                if (node.left.val === y && node.right.val === x) return false;
            }
            if (node.val === x) foundX = true;
            if (node.val === y) foundY = true;
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        if (foundX && foundY) return true;
    }
    return false;
};
// @lc code=end
