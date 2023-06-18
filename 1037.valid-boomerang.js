/*
 * @lc app=leetcode id=1037 lang=javascript
 *
 * [1037] Valid Boomerang
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
    const [x1, y1] = points[0];
    const [x2, y2] = points[1];

    if (x1 === x2 && y1 === y2) return false;

    const [x3, y3] = points[2];

    return (y2 - y1) * (x3 - x2) !== (y3 - y2) * (x2 - x1);
    
};
// @lc code=end
