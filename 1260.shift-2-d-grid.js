/*
 * @lc app=leetcode id=1260 lang=javascript
 *
 * [1260] Shift 2D Grid
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    const m = grid.length;
    const n = grid[0].length;
    const res = new Array(m).fill(0).map(() => new Array(n).fill(0));
    for (let i = 0; i < m; i++) {
        for (let j = 0;j < n; j++) {
            const newJ = (j + k) % n;
            const newI = (i + Math.floor((j + k) / n)) % m;
            res[newI][newJ] = grid[i][j];
        }
    }
    return res;
};
// @lc code=end
