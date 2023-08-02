/*
 * @lc app=leetcode id=1582 lang=javascript
 *
 * [1582] Special Positions in a Binary Matrix
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    let result = 0;
    const row = mat.length;
    const col = mat[0].length;
    const rowSum = new Array(row).fill(0);
    const colSum = new Array(col).fill(0);
    for (let i = 0; i < row; i++) {
        rowSum[i] = mat[i].reduce((acc, cur) => acc + cur);
    }
    for (let i = 0; i < col; i++) {
        colSum[i] = mat.reduce((acc, cur) => acc + cur[i], 0);
    }
    for (let i = 0; i < row; i++) {
        if (rowSum[i] !== 1) continue;
        for (let j = 0; j < col; j++) {
            if (colSum[j] !== 1) continue;
            if (mat[i][j] === 1) result++;
        }
    }
    return result;
};
// @lc code=end
