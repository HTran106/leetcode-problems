/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/*
Input: array;
Output: array with 2 indexes.
to get the output, I would add 2 unique numbers that adds up to the target.


first thing i would is create 2 pointers, one at the beginning and one at the end.
then I would iterate through the array and add the 2 numbers together.
if the sum is not the target, i would move the pointers accordingly
*/
// [1, 2, 3, 4, 5], 9
// i = 1
// j = 5

var twoSum = function (nums, target) {
    let i = 0;
    let j = nums.length - 1;
    let sorted = [...nums]
    sorted.sort((a, b) => a - b);
    while (i < j) {
        let sum = sorted[i] + sorted[j];
        if (sum === target) {
            return [nums.indexOf(sorted[i]), nums.lastIndexOf(sorted[j])];
        } else if (sum > target) {
            j--;
        } else {
            i++;
        }
    }
    return [];
};
// @lc code=end
