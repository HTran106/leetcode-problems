/*
 * @lc app=leetcode id=1668 lang=javascript
 *
 * [1668] Maximum Repeating Substring
 */

// @lc code=start
/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
    let res = 0;
    let temp = word;
    while (sequence.includes(temp)) {
        res++;
        temp += word;
    }
    return res;
};
// @lc code=end
