/*
 * @lc app=leetcode id=566 lang=javascript
 *
 * [566] Reshape the Matrix
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    const result = []
    const arr = mat.flat()
    if (r * c !== arr.length) return mat
    for (let i = 0; i < r; i++) {
        result.push(arr.splice(0, c))
    }
    return result
};
// @lc code=end
