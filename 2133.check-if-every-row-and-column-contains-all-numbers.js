/*
 * @lc app=leetcode id=2133 lang=javascript
 *
 * [2133] Check if Every Row and Column Contains All Numbers
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function(matrix) {
    let range = []
    for (let i = 1; i < matrix.length; i++) {
        range.push(i)
    }
    let temp = range
    let temp2 = range
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            let row = temp[i][j]
            let col = temp[j][i]
            if (temp.includes(row)) temp.splice(temp.indexOf(row), 1)
            if ()
        }
    }
};
// @lc code=end
