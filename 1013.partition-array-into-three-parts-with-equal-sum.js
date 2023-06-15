/*
 * @lc app=leetcode id=1013 lang=javascript
 *
 * [1013] Partition Array Into Three Parts With Equal Sum
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function(arr) {
    const sum = arr.reduce((acc, cur) => acc + cur, 0);
    if (sum % 3 !== 0) return false;
    const target = sum / 3;
    let count = 0;
    let cur = 0;
};
// @lc code=end
