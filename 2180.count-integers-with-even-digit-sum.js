/*
 * @lc app=leetcode id=2180 lang=javascript
 *
 * [2180] Count Integers With Even Digit Sum
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var countEven = function (num) {
    let count = 0
    for (let i = 1; i <= num; i++) {
        const n = i.toString().split('').reduce((a, c) => parseInt(a) + parseInt(c))
        console.log(n)
        n % 2 === 0 ? count++ : null
    }
    return count
};
// @lc code=end
// console.log(parseInt(19).toString().split('').reduce((a, c) => parseInt(a) + parseInt(c)))
