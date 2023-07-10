/*
 * @lc app=leetcode id=1437 lang=javascript
 *
 * [1437] Check If All 1's Are at Least Length K Places Away
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function(nums, k) {
    const ones = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            ones.push(i);
        }
    }
    for (let i = 1; i < ones.length; i++) {
        if (ones[i] - ones[i - 1] <= k) {
            return false;
        }
    }
    return true;
};
// @lc code=end
