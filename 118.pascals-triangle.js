/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if (numRows === 1) return [[1]]
    let triangle = [[1], [1,1]]
    if (numRows === 2) return triangle
    while (triangle.length < numRows) {
        let newRow = [1]
        let prevRow = triangle[triangle.length - 1]
        for (let i = 0; i < prevRow.length - 1; i++) {
            newRow.push(prevRow[i] + prevRow[i + 1])
        }
        newRow.push(1)
        triangle.push(newRow)
    }
    return triangle
};
// @lc code=end


/*
let res = [
        [1],
    ];

    while (res.length < numRows) {
        let prevRow = res[res.length - 1];
        let newRow = [1];
        for (let i = 0; i < prevRow.length - 1; i++) {
            newRow.push(prevRow[i] + prevRow[i + 1]);
        }
        newRow.push(1);
        res.push(newRow);
    }
    return res
*/
