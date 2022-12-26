/*
 * @lc app=leetcode id=500 lang=javascript
 *
 * [500] Keyboard Row
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let top = "qwertyuiop";
    let mid = "asdfghjkl";
    let bot = "zxcvbnm";
    let result = [];
    for (let i = 0; i < words.length; i++) {
        let word = words[i].toLowerCase();
        for (let j = 0; j < word.length; j++) {
            let char = word[j]
            if (!top.includes(char)) {
                if (!mid.includes(char)) {
                    if (!bot.includes(char)) {
                        break
                    }
                }
            }
        }
        result.push(word)
    }
    return result
};
// @lc code=end
