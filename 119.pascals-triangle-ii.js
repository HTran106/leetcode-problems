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

    while (numRows !== 2) {
        const last = triangle[triangle.length - 1]
        const temp = [1]
        last.forEach((el, i) => {
            temp.push(el + last[i + 1])
        })
        temp.push(1)
        triangle.push(temp)
        numRows--
    }
    return triangle[rowIndex]
};
// @lc code=end
