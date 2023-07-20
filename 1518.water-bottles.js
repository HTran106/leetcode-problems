/*
 * @lc app=leetcode id=1518 lang=javascript
 *
 * [1518] Water Bottles
 */

// @lc code=start
/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let emptyBottles = numBottles;
    let total = numBottles;
    while (emptyBottles >= numExchange) {
        const newBottles = Math.floor(emptyBottles / numExchange);
        total += newBottles;
        emptyBottles = newBottles + emptyBottles % numExchange;
    }
    return total;
};
// @lc code=end
