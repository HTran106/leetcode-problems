/*
 * @lc app=leetcode id=1295 lang=javascript
 *
 * [1295] Find Numbers with Even Number of Digits
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    const even = nums.filter(num => {
        const str = num.toString();
        return str.length % 2 === 0;
    }
    );
    return even.length;
    
};
// @lc code=end
