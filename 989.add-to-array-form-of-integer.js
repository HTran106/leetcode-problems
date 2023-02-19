/*
 * @lc app=leetcode id=989 lang=javascript
 *
 * [989] Add to Array-Form of Integer
 */

// @lc code=start
/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    let numStr = num.join('');
    let sum = BigInt(numStr) + BigInt(k);
    return sum.toString().split('').map(Number);
};
// @lc code=end
