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
    let res = ''
    let i = 0
    while (i < s.length) {
        let first = s.slice(0, k + 1)
        let second = s.slice(k)
        res += first + second
        i += 2000
    }
    return res
};
// @lc code=end
