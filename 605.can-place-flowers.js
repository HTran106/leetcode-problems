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
    // return flowerbed.filter((e, i) => i % 2 === 0 && e === 0 && flowerbed[i + 1] !== 1 && flowerbed[i - 1] !== 1).length >= n
    let count = 0
    for (let i = 0; i < flowerbed.length; i++) {
        let el = flowerbed[i]
        if (flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1 && el === 0) {
            flowerbed[i] = 1
            count++
        }
    }
    return count >= n
};
// @lc code=end
