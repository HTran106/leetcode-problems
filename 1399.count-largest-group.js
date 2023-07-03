/*
 * @lc app=leetcode id=1399 lang=javascript
 *
 * [1399] Count Largest Group
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
    const map = {};
    let max = 0;
    let count = 0;

    for (let i = 1; i <= n; i++) {
        const sum = sumOfDigits(i);
        map[sum] = map[sum] ? map[sum] + 1 : 1;
        max = Math.max(max, map[sum]);
    }

    
};
// @lc code=end
