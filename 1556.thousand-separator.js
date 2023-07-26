/*
 * @lc app=leetcode id=1556 lang=javascript
 *
 * [1556] Thousand Separator
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
    const str = n.toString();
    const result = [];
    let count = 0;
    for (let i = str.length - 1; i >= 0; i--) {
        if (count === 3) {
            result.push('.');
            count = 0;
        }
        result.push(str[i]);
        count++;
    }
    return result.reverse().join('');
};
// @lc code=end
