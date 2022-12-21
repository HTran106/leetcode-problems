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
var findRelativeRanks = function (score) {
    let ranks = {
        1: 'Gold Medal',
        2: 'Silver Medal',
        3: 'Bronze Medal',
    }

    const sorted = [...score].sort((a, b) => b - a)
    let res = []
    console.log(sorted)
    score.forEach(s => {
        if (sorted.indexOf(s) + 1 <= 3) res.push(ranks[sorted.indexOf(s) + 1])
        else res.push((sorted.indexOf(s) + 1).toString())
    })
    return res
};
// @lc code=end
