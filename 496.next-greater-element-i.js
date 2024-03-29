/*
 * @lc app=leetcode id=496 lang=javascript
 *
 * [496] Next Greater Element I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    const res = [];
    for (let i = 0; i < nums1.length; i++) {
        let num = nums1[i]
        if (nums2.indexOf(num) === nums2.length - 1) res.push(-1)
        for (let j = nums2.indexOf(num) + 1; j < nums2.length; j++) {
            let num2 = nums2[j]
            if (num2 < num && j === nums2.length - 1) res.push(-1)
            if (num2 > num) {
                res.push(num2)
                break
            }
        }
    }
    return res
};
// @lc code=end
