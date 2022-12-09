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
input: array of integers, target integer
output: an array with two indices
sum must be two unique numbers
if no solution, return empty array

first thing i would is create 2 pointers
one in the beginning
one in the end
create a copy of original input array
sort the copy
while the pointers are not equal
if number[i] + number[j] is lesser than target, i would increase my i pointer
if it is greater, i would decrease my j pointer
this should keep iterating until i find the solution and if i find a match, i would return an array with the two index of the number from the original array.
*/

[3, 3]

var twoSum = function (nums, target) {
    let i = 0;
    let j = nums.length - 1;
    let copy = [...nums];
    copy.sort((a, b) => a - b);
    while (i < j) {
        let sum = copy[i] + copy[j];
        if (sum === target) return [nums.indexOf(copy[i]), nums.lastIndexOf(copy[j])]
        if (sum > target) j--
        else i++
    }
    return []
};
// @lc code=end
