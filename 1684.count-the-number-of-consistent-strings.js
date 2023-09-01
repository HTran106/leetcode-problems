/*
 * @lc app=leetcode id=1684 lang=javascript
 *
 * [1684] Count the Number of Consistent Strings
 */

// @lc code=start
/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
    const set = new Set(allowed);
    let res = 0;
    for (let i = 0; i < words.length; i++) {
        let flag = true;
        for (let j = 0; j < words[i].length; j++) {
            if (!set.has(words[i][j])) {
                flag = false;
                break;
            }
        }
        if (flag) {
            res++;
        }
    }
    return res;
};
// @lc code=end
