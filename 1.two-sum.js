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
input: array of integers
output: array containing 2 indexes of elements that add up to target

approach:
create an results array which i will later return
2 pointers i and j references different elements in the input array
create a copy of original input array and sort it from low to high
start iterating through the ijput array
using a while loop and checking while index i is lesser than ineddx j
i would add those 2 elements and if it's higher than target
i would decrement j
else
increment i
once found, return the index of the 2 elements from original nums array
*/

// [3, 3]

var twoSum = function (nums, target) {
    let i = 0
    let j = nums.length - 1
    let copy = [...nums]
    copy = copy.sort((a, b) => a - b)
    while (i < j) {
        let num1 = copy[i]
        let num2 = copy[j]
        if (num1 + num2 === target) return [nums.indexOf(num1), nums.lastIndexOf(num2)]
        if (num1 + num2 > target) j--
        else i++
    }
    return []
};
//      i   j
// [1,2,3,4,5] 8

// @lc code=end
