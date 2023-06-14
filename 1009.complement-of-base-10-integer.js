/*
 * @lc app=leetcode id=1009 lang=javascript
 *
 * [1009] Complement of Base 10 Integer
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(n) {
    const binary = n.toString(2);
    let result = '';
    for (let i = 0; i < binary.length; i++) {
        result += binary[i] === '0' ? '1' : '0';
    }
    return parseInt(result, 2);
};
// @lc code=end
