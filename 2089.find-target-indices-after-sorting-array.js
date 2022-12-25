/*
 * @lc app=leetcode id=2089 lang=javascript
 *
 * [2089] Find Target Indices After Sorting Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    nums.sort((a, b) => a - b)
    const indices = []
    for (let i = 0; i < nums.length; i++) {
        nums[i] === target ? indices.push(i) : null
    }
    return indices
};
// @lc code=end
