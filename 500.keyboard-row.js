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
var findWords = function (words) {
    let top = "qwertyuiop";
    let mid = "asdfghjkl";
    let bot = "zxcvbnm";

    let res = []
    for (let i = 0; i < words.length; i++) {
        let word = words[i].toLowerCase();
        let row = 0;
        for (let j = 0; j < word.length; j++) {
            let char = word[j];
            if (top.includes(char)) {
                if (row == 0) {
                    row = 1;
                } else if (row == 2 || row == 3) {
                    row = 0;
                    break;
                }
            } else if (mid.includes(char)) {
                if (row == 0) {
                    row = 2;
                } else if (row == 1 || row == 3) {
                    row = 0;
                    break;
                }
            } else if (bot.includes(char)) {
                if (row == 0) {
                    row = 3;
                } else if (row == 1 || row == 2) {
                    row = 0;
                    break;
                }
            }
        }
        if (row != 0) {
            res.push(words[i]);
        }
    }
    return res;
};
// @lc code=end
