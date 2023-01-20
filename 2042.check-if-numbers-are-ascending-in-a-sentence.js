/*
 * @lc app=leetcode id=2042 lang=javascript
 *
 * [2042] Check if Numbers Are Ascending in a Sentence
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
    const nums = s.match(/\d+/g)
    if (nums === null) return true
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] >= nums[i + 1]) return true
    }
    return false
};
// @lc code=end
