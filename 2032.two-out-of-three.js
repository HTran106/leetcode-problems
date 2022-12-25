/*
 * @lc app=leetcode id=2032 lang=javascript
 *
 * [2032] Two Out of Three
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    let res = []
    for (let i = 0; i < nums1.length; i++) {
        if (nums2.indexOf(nums1[i]) > -1) res.push(nums1[i])
        if (nums3.indexOf(nums1[i]) > -1) res.push(nums1[i])
    }
    res = new Set(res)
    return Array.from(res)
};
// @lc code=end
