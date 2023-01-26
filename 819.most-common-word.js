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
var mostCommonWord = function (paragraph, banned) {
    let words = paragraph.split(' ');
    let currLength = 0;
    words.map(word => {
        word = word.replace(/[^a-zA-Z]/g, '').toLowerCase();
        return word;
    })
    let wordCount = {};
    words.forEach(word => {
        if (wordCount[word] === undefined) {
            wordCount[word] = 1;
        } else {
            wordCount[word]++;
        }
    })
    
    let maxCount = 0;
    let maxWord = '';

    for (let word in wordCount) {
        if (wordCount[word] > maxCount && !banned.includes(word)) {
            maxCount = wordCount[word];
            maxWord = word;
        }
    }
    return maxWord;
};
// @lc code=end
