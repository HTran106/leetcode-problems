/*
 * @lc app=leetcode id=1385 lang=javascript
 *
 * [1385] Find the Distance Value Between Two Arrays
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
    const result = arr1.filter(num1 => {
        return arr2.every(num2 => {
            return Math.abs(num1 - num2) > d;
        });
    }
    );
    return result.length;
};
// @lc code=end
