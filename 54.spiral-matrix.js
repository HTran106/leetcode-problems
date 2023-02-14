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
    let result = [];

    if (matrix.length === 1) {
        result.push(matrix[0][0])
        return result;
    }

    let max = matrix[0].length - 1;

    // Grab the first row | result.push.apply(result,matrix[0])
    for (let i = 0; i <= max; i++) {
        result.push(matrix[0][i]);
    }

    // Grab the last column
    for (let i = 1; i < max; i++) {
        result.push(matrix[i][max]);
    }

    // Grab the last row
    for (let i = max; i >= 0; i--) {
        result.push(matrix[max][i]);
    }

    // Grab the first column
    for (let i = max - 1; i > 0; i--) {
        result.push(matrix[i][0]);
    }

    let submatrix = [];
    // Form the inner matrix
    for (let i = 1; i < max; i++) {
        submatrix.push(matrix[i].splice(1, max - 1));
    }

    //call it recursively
    result = result.concat(spiralOrder(submatrix));

    return result;
};
// @lc code=end
