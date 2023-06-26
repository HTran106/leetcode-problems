/*
 * @lc app=leetcode id=1332 lang=javascript
 *
 * [1332] Remove Palindromic Subsequences
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
    const isPalindrome = (str) => {
        if (str.length === 0) {
            return true;
        }
        let left = 0;
        let right = str.length - 1;
        while (left < right) {
            if (str[left] !== str[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    if (s.length === 0) {
        return 0;
    }
    if (isPalindrome(s)) {
        return 1;
    }
    return 2;
};
// @lc code=end
