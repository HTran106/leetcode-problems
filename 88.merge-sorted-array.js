/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    nums1 = nums1.filter((num, i) => i < m)
    nums2 = nums2.filter((num, i) => i < n)
    nums1.push(...nums2)
    nums1 = nums1.sort((a, b) => a - b)
    console.log(nums1)
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
// @lc code=end
