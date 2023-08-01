/*
 * @lc app=leetcode id=1365 lang=javascript
 *
 * [1365] How Many Numbers Are Smaller Than the Current Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const sorted = [...nums].sort((a, b) => a - b);
    const map = new Map();
    sorted.forEach((num, index) => {
        if (!map.has(num)) {
            map.set(num, index);
        }
    });
    return nums.map(num => map.get(num));
};
// @lc code=end
