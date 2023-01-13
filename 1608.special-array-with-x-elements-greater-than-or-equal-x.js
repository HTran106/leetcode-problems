/*
 * @lc app=leetcode id=1608 lang=javascript
 *
 * [1608] Special Array With X Elements Greater Than or Equal X
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function(nums) {
    for (let i = 0; i <= nums.length; i++) {
        let count = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] >= i) {
                count++;
            }
        }
        if (count === i) {
            return i;
        }
    }
    return -1;
};
// @lc code=end
