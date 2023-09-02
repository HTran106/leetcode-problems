/*
 * @lc app=leetcode id=1694 lang=javascript
 *
 * [1694] Reformat Phone Number
 */

// @lc code=start
/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function (number) {
    let res = '';
    let temp = '';
    for (let i = 0; i < number.length; i++) {
        if (number[i] !== ' ' && number[i] !== '-') {
            temp += number[i];
        }
    }
    let i = 0;
    while (i < temp.length) {
        if (temp.length - i === 4) {
            res += temp.slice(i, i + 2) + '-' + temp.slice(i + 2, i + 4);
            break;
        }
        if (temp.length - i === 2) {
            res += temp.slice(i, i + 2);
            break;
        }
        res += temp.slice(i, i + 3) + '-';
        i += 3;
    }
    if (res[res.length - 1] === '-') {
        res = res.slice(0, res.length - 1);
    }
    return res;
};
// @lc code=end
