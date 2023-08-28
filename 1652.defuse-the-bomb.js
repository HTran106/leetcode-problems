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
    let sum = 0;
    const res = [];
    if (k === 0) {
        return new Array(code.length).fill(0);
    }
    if (k > 0) {
        for (let i = 1; i <= k; i++) {
            sum += code[i];
        }
        for (let i = 0; i < code.length; i++) {
            res.push(sum);
            sum -= code[(i + 1) % code.length];
            sum += code[(i + 1 + k) % code.length];
        }
    }
    if (k < 0) {
        for (let i = code.length - 1; i >= code.length + k; i--) {
            sum += code[i];
        }
        for (let i = 0; i < code.length; i++) {
            res.push(sum);
            sum -= code[(i + code.length + k) % code.length];
            sum += code[i];
        }
    }
    return res;
};
// @lc code=end
