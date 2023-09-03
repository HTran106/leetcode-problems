/*
 * @lc app=leetcode id=1710 lang=javascript
 *
 * [1710] Maximum Units on a Truck
 */

// @lc code=start
/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    const sorted = boxTypes.sort((a, b) => b[1] - a[1]);
    let res = 0;
    for (const box of sorted) {
        if (truckSize >= box[0]) {
            res += box[0] * box[1];
            truckSize -= box[0];
        } else {
            res += truckSize * box[1];
            break;
        }
    }
    return res;
};
// @lc code=end
