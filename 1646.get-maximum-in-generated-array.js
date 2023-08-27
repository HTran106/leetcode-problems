/*
 * @lc app=leetcode id=1646 lang=javascript
 *
 * [1646] Get Maximum in Generated Array
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function(n) {
    let max = 0;
    const arr = new Array(n + 1).fill(0);
    for (let i = 0; i <= n; i++) {
        if (i === 0 || i === 1) {
            arr[i] = i;
        } else if (i % 2 === 0) {
            arr[i] = arr[i / 2];
        } else {
            arr[i] = arr[(i - 1) / 2] + arr[(i - 1) / 2 + 1];
        }
        max = Math.max(max, arr[i]);
    }
    return max;
};
// @lc code=end
