/*
 * @lc app=leetcode id=389 lang=javascript
 *
 * [389] Find the Difference
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    const sArr = s.split('');
    const tArr = t.split('');
    let sSum = 0;
    let tSum = 0;
    for (let i = 0; i < sArr.length; i++) {
        sSum += sArr[i].charCodeAt(0);
        tSum += tArr[i].charCodeAt(0);
    }
    tSum += tArr[tArr.length - 1].charCodeAt(0);
    return String.fromCharCode(tSum - sSum);
};
// @lc code=end
