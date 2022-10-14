/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let num1 = nums[i]
        for (let j = i + 1; j < nums.length; j++) {
            let num2 = nums[j]
            if (num1 === num2) {
                nums.splice(j, 1)
                i--
            }
        }
    }
    return nums.length
};
// @lc code=end
