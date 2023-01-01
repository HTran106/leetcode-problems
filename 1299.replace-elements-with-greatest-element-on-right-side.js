/*
 * @lc app=leetcode id=1299 lang=javascript
 *
 * [1299] Replace Elements with Greatest Element on Right Side
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let res = []
    for (let i = 0; i < arr.length - 1; i++) {
        const newArr = arr.slice(i + 1)
        const max = Math.max(...newArr)
        max === -Infinity ? res.push(arr[i]) : res.push(max)
        // res.push(max)
    }
    res.push(-1)
    return res
};
// @lc code=end
