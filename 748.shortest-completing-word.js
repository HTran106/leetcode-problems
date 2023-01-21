/*
 * @lc app=leetcode id=748 lang=javascript
 *
 * [748] Shortest Completing Word
 */

// @lc code=start
/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz';
    let letters = [];

    for (let char of licensePlate) {
        if (char !== ' ' && alpha.includes(char.toLowerCase())) letters.push(char.toLowerCase())
    }

    let temp = [...letters]
    words.sort((a, b) => a.length - b.length)
    words.forEach()
};
// @lc code=end
