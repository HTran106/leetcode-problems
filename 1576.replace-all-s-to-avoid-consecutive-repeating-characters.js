/*
 * @lc app=leetcode id=1576 lang=javascript
 *
 * [1576] Replace All ?'s to Avoid Consecutive Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var modifyString = function(s) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '?') {
            for (let j = 0; j < alphabet.length; j++) {
                if (alphabet[j] !== result[i - 1] && alphabet[j] !== s[i + 1]) {
                    result += alphabet[j];
                    break;
                }
            }
        } else {
            result += s[i];
        }
    }
};
// @lc code=end
