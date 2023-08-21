/*
 * @lc app=leetcode id=1566 lang=javascript
 *
 * [1566] Detect Pattern of Length M Repeated K or More Times
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 */
var containsPattern = function(arr, m, k) {
    const n = arr.length;
    for (let i = 0; i <= n - m * k; i++) {
        let flag = true;
        for (let j = 0; j < m * k; j++) {
            if (arr[i + j] !== arr[i + j % m]) {
                flag = false;
                break;
            }
        }
        if (flag) return true;
    }
    return false;
};
// @lc code=end
