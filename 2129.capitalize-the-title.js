/*
 * @lc app=leetcode id=2129 lang=javascript
 *
 * [2129] Capitalize the Title
 */

// @lc code=start
/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    title = title.split(' ')
    title.map(word => {
        if (word.length <= 2) return word.toLowerCase()
        else return word[0].toUpperCase()
    })
};
// @lc code=end
