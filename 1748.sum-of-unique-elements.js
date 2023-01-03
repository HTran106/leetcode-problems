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
    let resArr = []
    nums.forEach((num, i) => {
        if (!resArr.includes(num)) resArr.push(num)
        else {
            resArr.splice(resArr.indexOf(num), 1)
        }
    })
    return resArr.reduce((a, c) => a + c)
};
// @lc code=end
