/*
 * @lc app=leetcode id=1725 lang=javascript
 *
 * [1725] Number Of Rectangles That Can Form The Largest Square
 */

// @lc code=start
/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function (rectangles) {
    const map = {};
    let max = 0;
    for (let i = 0; i < rectangles.length; i++) {
        const min = Math.min(...rectangles[i]);
        if (map[min] === undefined) {
            map[min] = 1;
        } else {
            map[min]++;
        }
        max = Math.max(max, min);
    }
    return map[max];
};
// @lc code=end
