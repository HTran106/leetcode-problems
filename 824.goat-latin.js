/*
 * @lc app=leetcode id=824 lang=javascript
 *
 * [824] Goat Latin
 */

// @lc code=start
/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function(sentence) {
    const words = sentence.split(' ')
    let res = []
    words.forEach(word => {
        if (word[0].match(/[aeiou]/i)) {
            res.push(word + 'ma' + 'a'.repeat(res.length + 1))
        } else {
            res.push(word.slice(1) + word[0] + 'ma' + 'a'.repeat(res.length + 1))
        }
    })
    return res.join(' ')
};
// @lc code=end
