/*
 * @lc app=leetcode id=1030 lang=javascript
 *
 * [1030] Matrix Cells in Distance Order
 */

// @lc code=start
/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
var allCellsDistOrder = function(rows, cols, rCenter, cCenter) {
    const result = [];
    const visited = new Set();
    const queue = [[rCenter, cCenter]];
    while (queue.length) {
        const [r, c] = queue.shift();
        if (r < 0 || c < 0 || r >= rows || c >= cols || visited.has(`${r},${c}`)) continue;
        result.push([r, c]);
        visited.add(`${r},${c}`);
        queue.push([r + 1, c]);
        queue.push([r - 1, c]);
        queue.push([r, c + 1]);
        queue.push([r, c - 1]);
    }
    return result;
};
// @lc code=end
