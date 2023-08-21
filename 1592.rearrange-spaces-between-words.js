/*
 * @lc app=leetcode id=1592 lang=javascript
 *
 * [1592] Rearrange Spaces Between Words
 */

// @lc code=start
/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(text) {
    const spaces = text.split('').filter(c => c === ' ').length;
    const words = text.trim().split(/\s+/);
    const gap = words.length > 1 ? Math.floor(spaces / (words.length - 1)) : 0;
    const extra = words.length > 1 ? spaces % (words.length - 1) : spaces;
    return words.join(' '.repeat(gap)) + ' '.repeat(extra);
};
// @lc code=end
