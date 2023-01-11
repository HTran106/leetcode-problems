/*
 * @lc app=leetcode id=832 lang=javascript
 *
 * [832] Flipping an Image
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    const reversed = image.map(arr => arr.reverse())
    return reversed.map(arr => {
        return arr.map(el => {
           return el === 1 ? 0 : 1
        })
    })
};
// @lc code=end
