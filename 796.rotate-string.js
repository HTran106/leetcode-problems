/*
 * @lc app=leetcode id=796 lang=javascript
 *
 * [796] Rotate String
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    s = s.split('');
    goal = goal.split('');
    if (s.length !== goal.length) {
        return false;
    }
    if (s.length === 0) {
        return true;
    }
    for (let i = 0; i < goal.length; i++) {
        let el = s.shift();
        s.push(el);
        if (s.join('') === goal.join('')) {
            return true;
        }
    }
    return false;
};
// @lc code=end
