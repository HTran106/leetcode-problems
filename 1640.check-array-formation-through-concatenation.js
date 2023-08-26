/*
 * @lc app=leetcode id=1640 lang=javascript
 *
 * [1640] Check Array Formation Through Concatenation
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
    const map = {};
    for (const piece of pieces) {
        map[piece[0]] = piece;
    }
    let i = 0;
    while (i < arr.length) {
        const piece = map[arr[i]];
        if (piece === undefined) {
            return false;
        }
        for (const num of piece) {
            if (num !== arr[i]) {
                return false;
            }
            i++;
        }
    }
    return true;
};
// @lc code=end
