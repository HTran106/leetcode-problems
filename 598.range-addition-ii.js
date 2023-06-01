/*
 * @lc app=leetcode id=598 lang=javascript
 *
 * [598] Range Addition II
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    let minM = m
    let minN = n
    for (let i = 0; i < ops.length; i++) {
        if (ops[i][0] < minM) minM = ops[i][0]
        if (ops[i][1] < minN) minN = ops[i][1]
    }
    return minM * minN
};
// @lc code=end
