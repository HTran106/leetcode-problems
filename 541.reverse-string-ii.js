/*
 * @lc app=leetcode id=541 lang=javascript
 *
 * [541] Reverse String II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    let result = '';
    let i = 0;
    while (i < s.length) {
        let temp = s.slice(i, i + k).split('').reverse().join('');
        result += temp;
        i += k;
        if (i < s.length) {
            temp = s.slice(i, i + k);
            result += temp;
            i += k;
        }
    }
    return result;
};
// @lc code=end
