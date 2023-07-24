/*
 * @lc app=leetcode id=1544 lang=javascript
 *
 * [1544] Make The String Great
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (stack.length > 0 && Math.abs(stack[stack.length - 1].charCodeAt(0) - s[i].charCodeAt(0)) === 32) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    return stack.join('');
};
// @lc code=end
