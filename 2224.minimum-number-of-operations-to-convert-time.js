/*
 * @lc app=leetcode id=2224 lang=javascript
 *
 * [2224] Minimum Number of Operations to Convert Time
 */

// @lc code=start
/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
var convertTime = function(current, correct) {
    const currentHr = current.split(":")
    const correctHr = correct.split(':')
    const times = correctHr[0] - currentHr[0]
    return correctHr[1] - currentHr[1] === 0 ? times : times + 1
};
// @lc code=end
