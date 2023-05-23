/*
 * @lc app=leetcode id=1200 lang=javascript
 *
 * [1200] Minimum Absolute Difference
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    const res = [];
    arr.sort((a, b) => a - b);
    let minDiff = Infinity;
    for (let i = 1; i < arr.length; i++) {
        const diff = arr[i] - arr[i - 1];
        if (diff < minDiff) {
            minDiff = diff;
            res.length = 0;
            res.push([arr[i - 1], arr[i]]);
        } else if (diff === minDiff) {
            res.push([arr[i - 1], arr[i]]);
        }
    }
    return res;
};
// @lc code=end
