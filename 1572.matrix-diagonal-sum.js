/*
 * @lc app=leetcode id=1572 lang=javascript
 *
 * [1572] Matrix Diagonal Sum
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let row1 = 0
    let col1 = 0
    let row2 = mat[0].length - 1
    let col2 = mat[0].length - 1
    let res = 0
    while (row1 !== mat.length && row2 !== -1) {
        let num1 = mat[row1][col1]
        let num2 = mat[row2][col2]
        if (row1 !== row2 && col1 !== col2) {
            res += num1 + num2
            row1++
            col1++
            row2--
            col2--
        } else {
            res += num1
            row1++
            col1++
            row2--
            col2--
        }
    }
    return res
};
// @lc code=end
