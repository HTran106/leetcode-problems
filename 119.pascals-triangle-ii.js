/*
 * @lc app=leetcode id=119 lang=javascript
 *
 * [119] Pascal's Triangle II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    if (rowIndex === 0) return [1]
    if (rowIndex === 1) return [1, 1]
    const triangle = [[1], [1, 1]]
    let numRows = rowIndex

    while (numRows !== 1) {
        const last = triangle[triangle.length - 1]
        const temp = [1]
        for (let i = 0; i < last.length; i++) {
            temp.push(last[i] + last[i + 1])
        }
        temp.push(1)
        triangle.push(temp)
        numRows--
    }
    return triangle[rowIndex - 1]
};
// @lc code=end
