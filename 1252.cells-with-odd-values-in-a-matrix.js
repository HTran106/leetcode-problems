/*
 * @lc app=leetcode id=1252 lang=javascript
 *
 * [1252] Cells with Odd Values in a Matrix
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(m, n, indices) {
    const row = new Array(m).fill(0);
    const col = new Array(n).fill(0);
    for (let i = 0; i < indices.length; i++) {
        row[indices[i][0]]++;
        col[indices[i][1]]++;
    }
    let res = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0;j < n; j++) {
            if ((row[i] + col[j]) % 2 === 1) {
                res++;
            }
        }
    }
    return res;
};
// @lc code=end
