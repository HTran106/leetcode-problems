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
    const sorted = nums.sort((a, b) => a - b);
    for (let i = 0; i < sorted.length; i++) {
        let num = sorted[i];
        let count = 0;
        for (let j = 0; j < sorted.length; j++) {
            if (sorted[j] >= num) {
                count++;
            }
        }
        if (count === num) {
            return num;
        }
    }
    return -1;
};
// @lc code=end
