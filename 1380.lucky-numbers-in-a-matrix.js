/*
 * @lc app=leetcode id=1380 lang=javascript
 *
 * [1380] Lucky Numbers in a Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;

    const minRow = [];
    const maxCol = [];

    for (let i = 0; i < m; i++) {
        let min = Infinity;
        for (let j = 0; j < n; j++) {
            min = Math.min(min, matrix[i][j]);
        }
        minRow.push(min);
    }

    for (let j = 0; j < n; j++) {
        let max = -Infinity;
        for (let i = 0; i < m; i++) {
            max = Math.max(max, matrix[i][j]);
        }
        maxCol.push(max);
    }
    
};
// @lc code=end
