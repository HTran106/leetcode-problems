/*
 * @lc app=leetcode id=1128 lang=javascript
 *
 * [1128] Number of Equivalent Domino Pairs
 */

// @lc code=start
/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
    const map = {};
    let count = 0;

    for (let i = 0; i < dominoes.length; i++) {
        const [a, b] = dominoes[i].sort((a, b) => a - b);
        const key = `${a}-${b}`;
        if (map[key]) {
            count += map[key];
            map[key]++;
        } else {
            map[key] = 1;
        }
    }

    return count;
};
// @lc code=end
