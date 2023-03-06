/*
 * @lc app=leetcode id=71 lang=javascript
 *
 * [71] Simplify Path
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let stack = [];
    let paths = path.split('/');
    for (let i = 0; i < paths.length; i++) {
        if (paths[i] === '' || paths[i] === '.') {
            continue;
        } else if (paths[i] === '..') {
            stack.pop();
        } else {
            stack.push(paths[i]);
        }
    }
    return '/' + stack.join('/');
};
// @lc code=end
