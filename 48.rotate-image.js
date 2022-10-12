/*
 * @lc app=leetcode id=48 lang=javascript
 *
 * [48] Rotate Image
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const len = matrix.length;
    for (let i = 0; i < len; i++) {
        for (let j = i; j < len; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len / 2; j++) {
            [matrix[i][j], matrix[i][len - j - 1]] = [matrix[i][len - j - 1], matrix[i][j]];
        }
    }
    return matrix
};
// @lc code=end
