/*
 * @lc app=leetcode id=1636 lang=javascript
 *
 * [1636] Sort Array by Increasing Frequency
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    const map = {};
    for (const num of nums) {
        map[num] = (map[num] || 0) + 1;
    }
    return nums.sort((a, b) => {
        if (map[a] === map[b]) {
            return b - a;
        }
        return map[a] - map[b];
    }
    );
};
// @lc code=end
