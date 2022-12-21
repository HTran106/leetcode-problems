/*
 * @lc app=leetcode id=506 lang=javascript
 *
 * [506] Relative Ranks
 */

// @lc code=start
/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let ranks = {
        1: 'Gold Medal',
        2: 'Silver Medal',
        3: 'Bronze Medal',
        4: '4',
        5: '5',
    }

    score.sort((a, b) => a - b)
    let res = []
    score.forEach(score => )
};
// @lc code=end
