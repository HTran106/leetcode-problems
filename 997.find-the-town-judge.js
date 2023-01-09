/*
 * @lc app=leetcode id=997 lang=javascript
 *
 * [997] Find the Town Judge
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    if (trust.length === 0 && n === 1) return 1
    const res = {}
    for (let i = 0; i < trust.length; i++) {
        const [a, b] = trust[i]
        if (!res[a]) res[a] = 0
        if (!res[b]) res[b] = 0
        res[a]--
        res[b]++
    }
    for (let i = 1; i <= n; i++) {
        if (res[i] === n - 1) return i
    }
    return -1
};
// @lc code=end
