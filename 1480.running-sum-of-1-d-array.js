/*
 * @lc app=leetcode id=1480 lang=javascript
 *
 * [1480] Running Sum of 1d Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    return nums.map((el, i) => {
        return nums.slice(0, i + 1)
                   .reduce((a, c) => a + c)
    })
};
// @lc code=end
