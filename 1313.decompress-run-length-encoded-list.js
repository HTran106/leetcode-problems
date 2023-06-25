/*
 * @lc app=leetcode id=1313 lang=javascript
 *
 * [1313] Decompress Run-Length Encoded List
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    function repeat(num, times) {
        const result = [];
        for (let i = 0; i < times; i++) {
            result.push(num);
        }
        return result;
    }
    const result = [];
    for (let i = 0; i < nums.length; i += 2) {
        result.push(...repeat(nums[i + 1], nums[i]));
    }
    return result;
};
// @lc code=end
