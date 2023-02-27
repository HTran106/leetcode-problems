/*
 * @lc app=leetcode id=1046 lang=javascript
 *
 * [1046] Last Stone Weight
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    while (stones.length > 1) {
        stones.sort((a, b) => b - a)
        const first = stones.shift()
        const second = stones.shift()
        if (first !== second) {
            stones.push(first - second)
        }
    }
    return stones.length ? stones[0] : 0
};
// @lc code=end
