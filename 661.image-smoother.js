/*
 * @lc app=leetcode id=661 lang=javascript
 *
 * [661] Image Smoother
 */

// @lc code=start
/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function(img) {
    const result = []
    for (let i = 0; i < img.length; i++) {
        const row = []
        for (let j = 0; j < img[i].length; j++) {
            let sum = 0
            let count = 0
            for (let m = i - 1; m <= i + 1; m++) {
                for (let n = j - 1; n <= j + 1; n++) {
                    if (img[m] && img[m][n] !== undefined) {
                        sum += img[m][n]
                        count++
                    }
                }
            }
            row.push(Math.floor(sum / count))
        }
        result.push(row)
    }
    return result
};
// @lc code=end
