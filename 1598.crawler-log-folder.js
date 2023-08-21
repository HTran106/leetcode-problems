/*
 * @lc app=leetcode id=1598 lang=javascript
 *
 * [1598] Crawler Log Folder
 */

// @lc code=start
/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    const stack = [];
    for (const log of logs) {
        if (log === '../') {
            stack.pop();
        } else if (log !== './') {
            stack.push(log);
        }
    }
    return stack.length;
};
// @lc code=end
