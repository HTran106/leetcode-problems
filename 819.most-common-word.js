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
    let wordCount = {};

    let words = paragraph.toLowerCase().split(/[^a-z]/);
    for (let word of words) {
        if (word.length > 0 && !banned.includes(word)) {
            if (wordCount[word]) {
                wordCount[word]++;
            } else {
                wordCount[word] = 1;
            }
        }
    }

    let maxCount = 0;
    let maxWord = '';
    for (let word in wordCount) {
        if (wordCount[word] > maxCount) {
            maxCount = wordCount[word];
            maxWord = word;
        }
    }
    return maxWord;
};
// @lc code=end
