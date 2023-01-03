/*
 * @lc app=leetcode id=1748 lang=javascript
 *
 * [1748] Sum of Unique Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
    let count = {}
    let sum = 0
    nums.forEach(num => {
        count[num] ? count[num]++ : count[num] = 1
    })
    console.log(count)
    for (let k in count) {
        if (count[k] === 1) sum += +k
    }
    return sum
};
// @lc code=end
