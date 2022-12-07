/*
 * @lc app=leetcode id=228 lang=javascript
 *
 * [228] Summary Ranges
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        let j = i;
        while (nums[j] + 1 === nums[j + 1]) j++;
        if (i < j) {
            nums[i] = nums[i] + '->' + nums[j];
            nums.splice(i + 1, j - i);
        }
    }
    return nums;
};
// @lc code=end
