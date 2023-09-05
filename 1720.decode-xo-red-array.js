/*
 * @lc app=leetcode id=1720 lang=javascript
 *
 * [1720] Decode XORed Array
 */

// @lc code=start
/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function (encoded, first) {
    const res = [first];
    for (let i = 0; i < encoded.length; i++) {
        res.push(res[i] ^ encoded[i]);
    }
    return res;
};
// @lc code=end
