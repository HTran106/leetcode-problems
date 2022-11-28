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
    let arr = title.split(' ')
    arr.map(word => {
        if (word.length <= 2) return word.toLowerCase()
        console.log(word[0].toUpperCase() + word.slice(1).toLowerCase())
    })
    console.log(arr)
    return arr.join(' ')
};
// @lc code=end
