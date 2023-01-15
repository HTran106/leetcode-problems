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
    let res = [];
    for (let i = 0; i < arr2.length; i++) {
        let num = arr2[i];
        let count = 0;
        for (let j = 0; j < arr1.length; j++) {
            if (arr1[j] === num) {
                count++;
            }
        }
        for (let j = 0; j < count; j++) {
            res.push(num);
        }
        arr1 = arr1.filter(item => item !== num);
    }
    arr1.sort((a, b) => a - b);
    return res.concat(arr1);
};
// @lc code=end
