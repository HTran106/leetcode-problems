/*
 * @lc app=leetcode id=1047 lang=javascript
 *
 * [1047] Remove All Adjacent Duplicates In String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (stack.length && stack[stack.length - 1] === s[i]) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }
    return stack.join('');
};
// @lc code=end
