/*
 * @lc app=leetcode id=1678 lang=javascript
 *
 * [1678] Goal Parser Interpretation
 */

// @lc code=start
/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    const map = {
        'G': 'G',
        '()': 'o',
        '(al)': 'al'
    }
    let res = '';
    let temp = '';
    for (let i = 0; i < command.length; i++) {
        temp += command[i];
        if (map[temp]) {
            res += map[temp];
            temp = '';
        }
    }
    return res;
};
// @lc code=end
