/*
 * @lc app=leetcode id=1337 lang=javascript
 *
 * [1337] The K Weakest Rows in a Matrix
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
    const result = [];
    const soldiers = [];
    for (let i = 0; i < mat.length; i++) {
        const row = mat[i];
        const soldier = row.reduce((acc, cur) => acc + cur, 0);
        soldiers.push([i, soldier]);
    }
    soldiers.sort((a, b) => a[1] - b[1]);
    for (let i = 0; i < k; i++) {
        result.push(soldiers[i][0]);
    }
    return result;
};
// @lc code=end
