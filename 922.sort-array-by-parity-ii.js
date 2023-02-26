/*
 * @lc app=leetcode id=922 lang=javascript
 *
 * [922] Sort Array By Parity II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let even = nums.filter(num => num % 2 === 0)
    let odd = nums.filter(num => num % 2 !== 0)
    let res = []
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            res.push(even.shift())
        } else {
            res.push(odd.shift())
        }
    }

};
// @lc code=end
