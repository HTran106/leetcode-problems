/*
 * @lc app=leetcode id=1122 lang=javascript
 *
 * [1122] Relative Sort Array
 */

// @lc code=start
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let res = []
    for (let i = 0; i < arr2.length; i++) {
        let num1 = arr2[i]
        for (let j = 0; j < arr1.length; j++) {
            let num2 = arr1[j]
            if (num1 === num2) {
                const num = arr1.splice(arr1.indexOf(num2), 1)
                res.push(num)
            }
        }
    }
    arr1.sort((a, b) => a - b)
    res = [...res, ...arr1]
    return res
};
// @lc code=end
