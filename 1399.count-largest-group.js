/*
 * @lc app=leetcode id=1399 lang=javascript
 *
 * [1399] Count Largest Group
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
const sumOfDigits = (n) => {
    let sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return sum;
}


var countLargestGroup = function(n) {
    const map = {};
    let max = 0;
    let count = 0;

    for (let i = 1; i <= n; i++) {
        const sum = sumOfDigits(i);
        map[sum] = map[sum] ? map[sum] + 1 : 1;
        max = Math.max(max, map[sum]);
    }

    for (let key in map) {
        if (map[key] === max) {
            count++;
        }
    }

    return count;
};
// @lc code=end
