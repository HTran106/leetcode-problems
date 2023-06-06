/*
 * @lc app=leetcode id=762 lang=javascript
 *
 * [762] Prime Number of Set Bits in Binary Representation
 */

// @lc code=start
/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function(left, right) {
    const isPrime = (num) => {
        if (num === 1) return false;
        if (num === 2) return true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    let count = 0;
    for (let i = left; i <= right; i++) {
        const bits = i.toString(2).split('').filter(b => b === '1').length;
        if (isPrime(bits)) count++;
    }
};
// @lc code=end
