/*
 * @lc app=leetcode id=1560 lang=javascript
 *
 * [1560] Most Visited Sector in  a Circular Track
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} rounds
 * @return {number[]}
 */
var mostVisited = function(n, rounds) {
    const result = [];
    const start = rounds[0];
    const end = rounds[rounds.length - 1];

    if (start <= end) {
        for (let i = start; i <= end; i++) {
            result.push(i);
        }
    } else {
        for (let i = 1; i <= end; i++) {
            result.push(i);
        }
        for (let i = start; i <= n; i++) {
            result.push(i);
        }
    }

    return result;
};
// @lc code=end
