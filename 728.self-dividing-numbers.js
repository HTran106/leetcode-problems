/*
 * @lc app=leetcode id=728 lang=javascript
 *
 * [728] Self Dividing Numbers
 */

// @lc code=start
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */

function isSelfDividing(num) {
    let n = num;
    while (n > 0) {
        let digit = n % 10;
        if (digit === 0 || num % digit !== 0) {
            return false;
        }
        n = Math.floor(n / 10);
    }
    return true;
}

var selfDividingNumbers = function(left, right) {
    let result = [];
    for (let i = left; i <= right; i++) {
        if (isSelfDividing(i)) {
            result.push(i);
        }
    }
    return result;
};
// @lc code=end
