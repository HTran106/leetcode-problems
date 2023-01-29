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
var isLongPressedName = function(name, typed) {
    let nameCharCount = {};
    let typedCharCount = {};

    for (let char of name) {
        nameCharCount[char] = nameCharCount[char] + 1 || 1
    }

    for (let char of typed) {
        typedCharCount[char] = typedCharCount[char] + 1 || 1
    }

    for (let key in nameCharCount) {
        if (typedCharCount[key] < nameCharCount[key]) return false
    }
    return true
};
// @lc code=end
