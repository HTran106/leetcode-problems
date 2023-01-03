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
var sumOfUnique = function(nums) {
    let resArr = []
    nums.forEach((num, i) => {
        if (!resArr.includes(num)) resArr.push(nums)
        else {
            resArr.splice(resArr.indexOf(num), 1)
        }
    })
    return resArr.reduce
};
// @lc code=end
