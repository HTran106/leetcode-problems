/*
 * @lc app=leetcode id=680 lang=javascript
 *
 * [680] Valid Palindrome II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (s[left] != s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

var validPalindrome = function(s) {
    for (let i = 0; i < s.length; i++) {
        let left = s.substring(0, i);
        let right = s.substring(i + 1);
        let str = left + right;
        if (isPalindrome(str)) {
            return true;
        }
    }
    return false;
};
// @lc code=end
