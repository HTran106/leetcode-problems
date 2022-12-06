/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let res = []

    while (res.length !== matrix.flat().length) {
        res = [...res, matrix[0].splice()]
    }
};
// @lc code=end
