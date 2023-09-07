/*
 * @lc app=leetcode id=1736 lang=javascript
 *
 * [1736] Latest Time by Replacing Hidden Digits
 */

// @lc code=start
/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function(time) {
    const arr = time.split('');
    if (arr[0] === '?') {
        arr[0] = arr[1] === '?' || arr[1] < '4' ? '2' : '1';
    }
    if (arr[1] === '?') {
        arr[1] = arr[0] === '2' ? '3' : '9';
    }
    if (arr[3] === '?') {
        arr[3] = '5';
    }
    if (arr[4] === '?') {
        arr[4] = '9';
    }
    return arr.join('');
};
// @lc code=end
