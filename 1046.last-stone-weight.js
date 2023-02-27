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
    while (stones.length !== 1) {
        const first = Math.max(...stones)
        stones.splice(stones.indexOf(first), 1)
        const second = Math.max(...stones)
        stones.splice(stones.indexOf(second), 1)
        if (first !== second) {
            stones.push(first - second)
        }
    }
    return stones.length ? stones[0] : 0
};
// @lc code=end
