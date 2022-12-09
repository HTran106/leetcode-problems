/*
 * @lc app=leetcode id=54 lang=javascript
 *
 * [54] Spiral Matrix
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let res = [];

    while (res.length !== matrix.flat().length) {
        let top = matrix.splice(0, 1)
        res = [...res, ...top.flat()]
        // console.log(res)
        for (let i = 0; i < matrix[0].length; i++) {
            let right = matrix[i].splice(matrix[i].length - 1, 1)
            res = [...res, ...right]
            // console.log(res)
        }

        let bottom = matrix.splice(matrix.length - 1, 1).flat().reverse()
        res = [...res, ...bottom]
        // console.log(res)
        for (let i = matrix.length - 1; i >= 0; i--) {
            let left = matrix[i].splice(0, 1)
            res = [...res, ...left]
            console.log(matrix)
            console.log(res)
        }
        if (matrix.length === 1) res = [...res, ...matrix.flat()]
    }
    return res
};
// @lc code=end
