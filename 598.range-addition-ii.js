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
    const result = []
    for (let i = 0; i < m; i++) {
        result.push(new Array(n).fill(0))
    }
    for (let i = 0; i < ops.length; i++) {
        for (let j = 0; j < ops[i][0]; j++) {
            for (let k = 0; k < ops[i][1]; k++) {
                result[j][k]++
            }
        }
    }
    
};
// @lc code=end
