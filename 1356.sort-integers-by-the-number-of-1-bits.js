/*
 * @lc app=leetcode id=1356 lang=javascript
 *
 * [1356] Sort Integers by The Number of 1 Bits
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    const countBits = (num) => {
        let count = 0;
        while (num > 0) {
            if (num % 2 === 1) {
                count++;
            }
            num = Math.floor(num / 2);
        }
        return count;
    }
    return arr.sort((a, b) => {
        const countA = countBits(a);
        const countB = countBits(b);
        if (countA === countB) {
            return a - b;
        }
        return countA - countB;
    });
    
};
// @lc code=end
