/*
 * @lc app=leetcode id=374 lang=javascript
 *
 * [374] Guess Number Higher or Lower
 */

// @lc code=start
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */

let guess = (num) => {
    if (num === 6) return 0
    if (num > 6) return -1
    if (num < 6) return 1
}

var guessNumber = function(n) {
    let left = 1;
    let right = n;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let res = guess(mid);
        if (res === 0) {
            return mid;
        } else if (res === -1) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;
};
// @lc code=end
