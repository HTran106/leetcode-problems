/*
 * @lc app=leetcode id=1417 lang=javascript
 *
 * [1417] Reformat The String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reformat = function(s) {
    const letters = [];
    const numbers = [];

    for (let i = 0; i < s.length; i++) {
        if (isNaN(s[i])) {
            letters.push(s[i]);
        } else {
            numbers.push(s[i]);
        }
    }

    if (Math.abs(letters.length - numbers.length) > 1) {
        return '';
    }

    const result = [];
    let i = 0;
    let j = 0;
    let isLetter = letters.length > numbers.length;
    while (i < letters.length && j < numbers.length) {
        if (isLetter) {
            result.push(letters[i++]);
        } else {
            result.push(numbers[j++]);
        }
        isLetter = !isLetter;
    }

    if (i < letters.length) {
        result.push(letters[i]);
    }

    if (j < numbers.length) {
        result.push(numbers[j]);
    }

    return result.join('');

};
// @lc code=end
