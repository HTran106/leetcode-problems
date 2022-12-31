/*
 * @lc app=leetcode id=1287 lang=javascript
 *
 * [1287] Element Appearing More Than 25% In Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
    const len = arr.length;
    const threshold = len / 4;
    let count = 1;
    for (let i = 1; i < len; i++) {
        if (arr[i] === arr[i - 1]) {
            count++;
        } else {
            count = 1;
        }
        if (count > threshold) {
            return arr[i];
        }
    }
    return arr[0];
};
// @lc code=end
