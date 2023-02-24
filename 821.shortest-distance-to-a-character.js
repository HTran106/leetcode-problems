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
            let left = i - 1
            let right = i + 1
            while (left >= 0 || right < s.length) {
                if (s[left] === c) {
                    res.push(Math.abs(i - left))
                    break
                }
                if (s[right] === c) {
                    res.push(Math.abs(i - right))
                    break
                }
                left--
                right++
            }
        }
    }
    return res
};
// @lc code=end
