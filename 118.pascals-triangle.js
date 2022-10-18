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
};
// @lc code=end
