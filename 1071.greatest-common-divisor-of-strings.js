/*
 * @lc app=leetcode id=1071 lang=javascript
 *
 * [1071] Greatest Common Divisor of Strings
 */

// @lc code=start
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    const str1Len = str1.length;
    const str2Len = str2.length;
    const gcd = (a, b) => {
        if (b === 0) return a;
        return gcd(b, a % b);
    }
    const len = gcd(str1Len, str2Len);
    const str = str1.slice(0, len);
};
// @lc code=end
