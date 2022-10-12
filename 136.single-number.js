/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const count = {}
    nums.forEach(num => {
        count[num] = count[num] ? count[num] + 1 : 1
    })
    for (let key in count) {
        if (count[key] === 1) {
            return key
        }
    }
};
// @lc code=end
