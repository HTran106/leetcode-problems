/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const res = {};
    nums.forEach(num => {
        if (res[num]) {
            res[num] += 1
        } else {
            res[num] = 1
        }
    })
    console.log(res)
    const max = Math.max(...Object.values(res))
    for (let num in res) {
        if (res[num] === max) return num
    }
};

majorityElement([3,2,3])
// @lc code=end
