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
    let rows = {
        1: "qwertyuiop",
        2: "asdfghjkl",
        3: "zxcvbnm"
    }

    let row = 1
    let res = []
    for (let i = 0; i < words.length; i++) {
        row = 1
        let word = words[i]
        for (let j = 0; j < word.length; j++) {
            let char = word[j].toLowerCase()
            if (!rows[row].includes(char)) {
                j = 0
                row++
            }
            if (row === 4) break
            if (j === word.length - 1 && rows[row].includes(char)) res.push(word)
        }
    }
    return res
};
// @lc code=end
