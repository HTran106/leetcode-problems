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
    
};
// @lc code=end
