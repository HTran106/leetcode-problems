/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 !== 0) return false;
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (c === '(' || c === '[' || c === '{') {
            stack.push(c);
        } else {
            const last = stack.pop();
            if (c === ')' && last !== '(') return false;
            if (c === ']' && last !== '[') return false;
            if (c === '}' && last !== '{') return false;
        }
    }
    return stack.length === 0;
};
// @lc code=end
