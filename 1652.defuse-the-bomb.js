/*
 * @lc app=leetcode id=1652 lang=javascript
 *
 * [1652] Defuse the Bomb
 */

// @lc code=start
/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function(code, k) {
    const res = new Array(code.length).fill(0);
    if (k === 0) {
        return res;
    }
    const isPositive = k > 0;
    k = Math.abs(k);
    for (let i = 0; i < code.length; i++) {
        let sum = 0;
        for (let j = 1; j <= k; j++) {
            const index = (i + j) % code.length;
            sum += code[index];
        }
        res[i] = isPositive ? sum : -sum;
    }
    return res;
};
// @lc code=end
