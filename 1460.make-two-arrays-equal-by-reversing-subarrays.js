/*
 * @lc app=leetcode id=1460 lang=javascript
 *
 * [1460] Make Two Arrays Equal by Reversing Subarrays
 */

// @lc code=start
/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    let result = true;
    const map = {};

    for (let i = 0; i < target.length; i++) {
        const num = target[i];
        map[num] = map[num] ? map[num] + 1 : 1;
    }

    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (!map[num]) {
            result = false;
            break;
        }
        map[num]--;
    }
    
};
// @lc code=end
