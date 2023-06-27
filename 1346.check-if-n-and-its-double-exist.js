/*
 * @lc app=leetcode id=1346 lang=javascript
 *
 * [1346] Check If N and Its Double Exist
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    const map = {};

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (map[num * 2] || map[num / 2]) {
            return true;
        }
        map[num] = true;
    }
    return false;
};
// @lc code=end
