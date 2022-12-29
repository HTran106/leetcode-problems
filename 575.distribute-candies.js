/*
 * @lc app=leetcode id=575 lang=javascript
 *
 * [575] Distribute Candies
 */

// @lc code=start
/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    let res = candyType.length / 2;
    let set = new Set(candyType);
    if (set.size < res) {
        return set.size;
    }
    return res;
};
// @lc code=end
