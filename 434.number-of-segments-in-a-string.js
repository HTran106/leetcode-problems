/*
 * @lc app=leetcode id=434 lang=javascript
 *
 * [434] Number of Segments in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
    let segments = s.split(' ')
    let count = 0
    segments.forEach(segment => {
        if (!' '.includes(segment)) count++
    })
    return count
};
// @lc code=end
