/*
 * @lc app=leetcode id=821 lang=javascript
 *
 * [821] Shortest Distance to a Character
 */

// @lc code=start
/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    const res = []
    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        if (char === c) res.push(0)
        else {
            let left = i
            let right = i
            while (s[left] !== c || s[right] !== c) {
                if (char[left] === c) {
                    res.push(Math.abs(i - left))
                }
                if (char[right] === c) {
                    res.push(Math.abs(i - right))
                }
                if (left >= 0) left--
                if (right < s.length) right++
            }
        }
    }
    return res
};
// @lc code=end
