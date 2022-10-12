/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const nums = [...nums1, ...nums2].sort((a, b) => a - b);
    const len = nums.length;
    if (len % 2 === 0) {
        return (nums[len / 2 - 1] + nums[len / 2]) / 2;
    }
    return nums[Math.floor(len / 2)];
};
// @lc code=end
