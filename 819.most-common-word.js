/*
 * @lc app=leetcode id=819 lang=javascript
 *
 * [819] Most Common Word
 */

// @lc code=start
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    let words = paragraph.split(' ');
    words.map(word => {
        word = word.replace(/[^a-zA-Z]/g, '').toLowerCase();
        return word;
    })
    words.filter(word => {
        
    })
};
// @lc code=end
