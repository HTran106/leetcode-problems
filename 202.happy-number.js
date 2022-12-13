/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */


/*
input: number;
output: boolean;

approach:
i would turn the number into a string, split it into an array.
use reduce to square it and get a new number
and keep repeating until it equals 1 or less
break the loop if lesser than one and return rfalse

*/
var isHappy = function(n) {
    if (n === 1) return true
    let set = new Set()
    while (n > 1) {
        let arr = n.toString().split('')
        n = arr.reduce((acc, curr) => acc + curr * curr, 0)
        if (set.has(n)) return false
        set.add(n)
    }
    return true
};

// @lc code=end
