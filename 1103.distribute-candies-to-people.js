/*
 * @lc app=leetcode id=1103 lang=javascript
 *
 * [1103] Distribute Candies to People
 */

// @lc code=start
/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function (candies, num_people) {
    const result = new Array(num_people).fill(0);
    let i = 0;
    while (candies > 0) {
        result[i % num_people] += Math.min(candies, i + 1);
        candies -= i + 1;
        i++;
    }
    return result;
};
// @lc code=end
