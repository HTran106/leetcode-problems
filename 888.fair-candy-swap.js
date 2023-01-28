/*
 * @lc app=leetcode id=888 lang=javascript
 *
 * [888] Fair Candy Swap
 */

// @lc code=start
/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function(aliceSizes, bobSizes) {
    const sumA = aliceSizes.reduce((a, b) => a + b, 0);
    const sumB = bobSizes.reduce((a, b) => a + b, 0);

    const diff = (sumA - sumB) / 2;

    const setB = new Set(bobSizes);

    for (let x of aliceSizes) {
        if (setB.has(x - diff)) {
            return [x, x - diff];
        }
    }

    return [];

};
// @lc code=end
