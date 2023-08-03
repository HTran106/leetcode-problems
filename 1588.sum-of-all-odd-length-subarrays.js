/*
 * @lc app=leetcode id=1588 lang=javascript
 *
 * [1588] Sum of All Odd Length Subarrays
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    const len = arr.length;
    let result = 0;
    for (let i = 0; i < len; i++) {
        result += arr[i] * Math.ceil((i + 1) * (len - i) / 2);
    }
    return result;
};
// @lc code=end
