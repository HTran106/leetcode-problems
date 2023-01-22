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

    let min = Infinity
    for (let i = 0; i < values.length; i++) {
        let num1 = values[i]
        for (let j = i + 1; j < values.length; j++) {
            let num2 = values[j]
            if (Math.abs(num1 - num2) < min) min = Math.abs(num1 - num2)
        }
    }
    return min
};
// @lc code=end
