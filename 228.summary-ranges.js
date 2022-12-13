/*
 * @lc app=leetcode id=228 lang=javascript
 *
 * [228] Summary Ranges
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */


/*
input: sorted array
output: array of strings containing ranges

APPROACH:
initialize a res empty array
iterate through the array and i want to check if my element at the ith index + 1 is equal to 1 more than the current index.
if it isn't, i would iterpolate a string and push it into my results array
return my array

*/
var summaryRanges = function (nums) {
    const res = [];
    let firstNum = nums[0]
    nums.forEach((num, i) => {
        if (nums[i + 1] !== num + 1) { // [1,1,2,3,3,4]
            if (firstNum === num) {
                res.push(`${firstNum}`)
                firstNum = nums[i + 1]
            }
            else {
                res.push(`${firstNum}->${num}`)
                firstNum = nums[i + 1]
            }
        }
    })
    return res
};
// @lc code=end
