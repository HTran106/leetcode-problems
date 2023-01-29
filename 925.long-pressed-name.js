/*
 * @lc app=leetcode id=925 lang=javascript
 *
 * [925] Long Pressed Name
 */

// @lc code=start
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
    const nameArr = name.split('');
    const typedArr = typed.split('');
    let i = 0;
    let j = 0;
    while (i < nameArr.length && j < typedArr.length) {
        if (nameArr[i] === typedArr[j]) {
            i++;
            j++;
        } else if (i > 0 && nameArr[i - 1] === typedArr[j]) {
            j++;
        } else {
            return false;
        }
    }
};
// @lc code=end
