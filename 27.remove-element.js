/*
 * @lc app=leetcode id=27 lang=javascript
 *
 * [27] Remove Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    nums.forEach(num => {
        if (num === val) {
            nums.splice(nums.indexOf(num), 1, "_");
        }
    })
    return nums
};
// @lc code=end
