/*
 * @lc app=leetcode id=1550 lang=javascript
 *
 * [1550] Three Consecutive Odds
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    const len = arr.length;
    if (len < 3) {
        return false;
    }
    for (let i = 0; i < len - 2; i++) {
        if (arr[i] % 2 === 1 && arr[i + 1] % 2 === 1 && arr[i + 2] % 2 === 1) {
            return true;
        }
    }
    return false;
};
// @lc code=end
