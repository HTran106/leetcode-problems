/*
 * @lc app=leetcode id=108 lang=javascript
 *
 * [108] Convert Sorted Array to Binary Search Tree
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    let min = Math.min(...nums)
    nums.splice(nums.indexOf(min), 1)
    let root = new TreeNode(min)
    let curr = root
    nums.forEach(num => {
        if (num < curr.val) {
            curr.left = new TreeNode(num)
        } else {
            curr.right = new TreeNode(num)
        }
        curr = curr
    })
    return root
};

// @lc code=end
