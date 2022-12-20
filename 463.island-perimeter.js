/*
 * @lc app=leetcode id=463 lang=javascript
 *
 * [463] Island Perimeter
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */

[
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0]
]


var islandPerimeter = function (grid) {
    let count = 0

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === 1) {
                if (grid[row - 1][col] && grid[row - 1][col] !== 1) count++
                if (grid[row + 1][col] && grid[row + 1][col] !== 1) count++
                if (grid[row][col - 1] && grid[row][col - 1] !== 1) count++
                if (grid[row][col + 1] && grid[row][col + 1] !== 1) count++
            }
        }
    }
    return count
};
// @lc code=end