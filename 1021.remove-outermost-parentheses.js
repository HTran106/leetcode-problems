/*
 * @lc app=leetcode id=1021 lang=javascript
 *
 * [1021] Remove Outermost Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    const stack = [];
    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            if (stack.length) result += s[i];
            stack.push(s[i]);
        } else {
            stack.pop();
            if (stack.length) result += s[i];
        }
    }
    return result;
};
// @lc code=end
