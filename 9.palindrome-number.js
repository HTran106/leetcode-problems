/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
/*
Input: integer
Output: Boolean

turn integer into a string
turn string into an array
reverse the array
turn the array back into a string
compare the original integer string to the reversed integer string

*/


var isPalindrome = function(x) {
    return x.toString() === x.toString()
                            .split('')
                            .reverse()
                            .join('')
};
// @lc code=end
