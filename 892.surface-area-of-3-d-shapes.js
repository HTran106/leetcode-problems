/*
 * @lc app=leetcode id=892 lang=javascript
 *
 * [892] Surface Area of 3D Shapes
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
    const row = grid.length;
    const col = grid[0].length;
    let area = 0;

    for (let r = 0; r < row; r++) {
        for (let c = 0; c < col; c ++) {
            if (grid[r][c] > 0) {
                area += grid[r][c] * 4 + 2;
                if (r > 0) area -= Math.min(grid[r][c], grid[r - 1][c]) * 2;
                if (c > 0) area -= Math.min(grid[r][c], grid[r][c - 1]) * 2;
            }
        }
    }

    return area;
};
// @lc code=end
