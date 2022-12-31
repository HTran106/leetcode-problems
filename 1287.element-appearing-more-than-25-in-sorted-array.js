/*
 * @lc app=leetcode id=1287 lang=javascript
 *
 * [1287] Element Appearing More Than 25% In Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {
    const obj = {}
    let quarter = Math.ceil(arr.length / 4)
    arr.forEach(num => {
        obj[num] ? obj[num]++ : obj[num] = 1
    })
    for (let k in obj) {
        if (obj[k] >= quarter) return k
    }
};
// @lc code=end
