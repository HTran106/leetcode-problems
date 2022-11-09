/*
 * @lc app=leetcode id=917 lang=javascript
 *
 * [917] Reverse Only Letters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function(s) {
    let alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let arr = s.split('');
    let res = [];
    for (let i = arr.length - 1; i >= 0; i--) {
            res.push(arr[i]);
    }
    return res.join('')
};
// @lc code=end
