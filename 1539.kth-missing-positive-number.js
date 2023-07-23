/*
 * @lc app=leetcode id=1539 lang=javascript
 *
 * [1539] Kth Missing Positive Number
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    const set = new Set(arr);
    let count = 0;
    for (let i = 1; i <= arr[arr.length - 1]; i++) {
        if (!set.has(i)) {
            count++;
            if (count === k) {
                return i;
            }
        }
    }
};
// @lc code=end
