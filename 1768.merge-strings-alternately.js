/*
 * @lc app=leetcode id=1768 lang=javascript
 *
 * [1768] Merge Strings Alternately
 */

// @lc code=start
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const word1 = word1.split('');
    const word2 = word2.split('');
    const result = [];

    while (word1.length || word2.length) {
        if (word1.length) {
            result.push(word1.shift());
        }
        if (word2.length) {
            result.push(word2.shift());
        }
    }
    return result.join('');
};
// @lc code=end
