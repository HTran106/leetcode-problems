/*
 * @lc app=leetcode id=605 lang=javascript
 *
 * [605] Can Place Flowers
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    return flowerbed.filter((e, i) => i % 2 === 0 && e === 0 && flowerbed[i + 1] !== 1 && flowerbed[i - 1] !== 1).length >= n
};
// @lc code=end
