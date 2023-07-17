/*
 * @lc app=leetcode id=1502 lang=javascript
 *
 * [1502] Can Make Arithmetic Progression From Sequence
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    const sorted = arr.sort((a, b) => a - b);
    const diff = sorted[1] - sorted[0];
    let result = true;
    for (let i = 2; i < sorted.length; i++) {
        if (sorted[i] - sorted[i - 1] !== diff) {
            result = false;
            break;
        }
    }
    return result;
};
// @lc code=end
