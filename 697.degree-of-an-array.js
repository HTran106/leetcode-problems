/*
 * @lc app=leetcode id=697 lang=javascript
 *
 * [697] Degree of an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let map = new Map()
    let max = 0
    let min = Infinity
    for (let i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) map.set(nums[i], 1)
        else map.set(nums[i], map.get(nums[i]) + 1)
        if (map.get(nums[i]) > max) max = map.get(nums[i])
    }
    for (let [key, value] of map) {
        if (value === max) {
            let first = nums.indexOf(key)
            let last = nums.lastIndexOf(key)
            if (last - first + 1 < min) min = last - first + 1
        }
    }
    return min
};
// @lc code=end
