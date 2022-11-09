/*
 * @lc app=leetcode id=766 lang=javascript
 *
 * [766] Toeplitz Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    for (let i = 0; i < m - 1; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (matrix[i][j] !== matrix[i + 1][j + 1]) {
                return false;
            }
        }
    }
    return true;
};
// @lc code=end
