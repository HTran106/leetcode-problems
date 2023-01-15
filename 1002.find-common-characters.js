/*
 * @lc app=leetcode id=1002 lang=javascript
 *
 * [1002] Find Common Characters
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let res = [];
    let firstWord = words[0];
    for (let i = 0; i < firstWord.length; i++) {
        let char = firstWord[i];
        let isCommon = true;
        for (let j = 1; j < words.length; j++) {
            let word = words[j];
            if (word.indexOf(char) === -1) {
                isCommon = false;
                break;
            } else {
                words[j] = word.replace(char, '');
            }
        }
        if (isCommon) {
            res.push(char);
        }
    }
    return res;
};
// @lc code=end
