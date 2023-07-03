/*
 * @lc app=leetcode id=1394 lang=javascript
 *
 * [1394] Find Lucky Integer in an Array
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let result = -1;
    const map = {};

    for (let i = 0; i < arr.length; i++) {
        map[arr[i]] = map[arr[i]] ? map[arr[i]] + 1 : 1;
    }

    for (let key in map) {
        if (Number(key) === map[key]) {
            result = Math.max(result, map[key]);
        }
    }
    
};
// @lc code=end
