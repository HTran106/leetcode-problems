/*
 * @lc app=leetcode id=1160 lang=javascript
 *
 * [1160] Find Words That Can Be Formed by Characters
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
    let res = 0;
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        let charsCopy = chars;
        let isCommon = true;
        for (let j = 0; j < word.length; j++) {
            let char = word[j];
            if (charsCopy.indexOf(char) === -1) {
                isCommon = false;
                break;
            } else {
                charsCopy = charsCopy.replace(char, '');
            }
        }
        if (isCommon) {
            res += word.length;
        }
    }
    return res;
};
// @lc code=end
