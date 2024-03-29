/*
 * @lc app=leetcode id=1360 lang=javascript
 *
 * [1360] Number of Days Between Two Dates
 */

// @lc code=start
/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function (date1, date2) {
    const date1Obj = new Date(date1);
    const date2Obj = new Date(date2);
    const diff = Math.abs(date1Obj - date2Obj);
    return diff / (1000 * 60 * 60 * 24);
};
// @lc code=end
