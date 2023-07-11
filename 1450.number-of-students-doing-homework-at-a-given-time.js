/*
 * @lc app=leetcode id=1450 lang=javascript
 *
 * [1450] Number of Students Doing Homework at a Given Time
 */

// @lc code=start
/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function(startTime, endTime, queryTime) {
    const result = [];
    for (let i = 0; i < startTime.length; i++) {
        if (startTime[i] <= queryTime && endTime[i] >= queryTime) {
            result.push(i);
        }
    }
    return result.length;
};
// @lc code=end
