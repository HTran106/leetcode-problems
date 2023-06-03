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
    const map = {}
    let max = 0
    for (let i = 0; i < nums.length; i++) {
        if (!map[nums[i]]) map[nums[i]] = 1
        else map[nums[i]]++
        if (map[nums[i]] > max) max = map[nums[i]]
    }
    const arr = []
    for (let key in map) {
        if (map[key] === max) arr.push(key)
    }
    
};
// @lc code=end
