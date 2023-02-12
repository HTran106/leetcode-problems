/*
 * @lc app=leetcode id=844 lang=javascript
 *
 * [844] Backspace String Compare
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    let sArr = s.split('')
    let tArr = t.split('')
    let sArr2 = []
    let tArr2 = []
    for (let i = 0; i < sArr.length; i++) {
        if (sArr[i] === '#') {
            sArr2.pop()
        } else {
            sArr2.push(sArr[i])
        }
    }
    for (let i = 0; i < tArr.length; i++) {
        if (tArr[i] === '#') {
            tArr2.pop()
        } else {
            tArr2.push(tArr[i])
        }
    }
    return sArr2.join('') === tArr2.join('')
};
// @lc code=end
