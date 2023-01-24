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
var selfDividingNumbers = function(left, right) {
    let res = []
    for (let i = left; i <= right; i++) {
        let nums = i.toString().split('')
        nums.forEach((divisor, idx) => {
            if (i % divisor === 0 && idx === nums.length - 1) res.push(i)
        })
    }
};
// @lc code=end
