/*
 * @lc app=leetcode id=1351 lang=javascript
 *
 * [1351] Count Negative Numbers in a Sorted Matrix
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    let count = 0;
    let i = m - 1;
    let j = 0;

    while (i >= 0 && j < n) {
        if (grid[i][j] < 0) {
            count += n - j;
            i--;
        } else {
            j++;
        }
    }

    return count;
};
// @lc code=end
