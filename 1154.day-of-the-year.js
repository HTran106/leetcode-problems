/*
 * @lc app=leetcode id=1154 lang=javascript
 *
 * [1154] Day of the Year
 */

// @lc code=start
/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    const [year, month, day] = date.split('-').map(Number);
    const isLeapYear = year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    const days = [31, isLeapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30];
    return days.slice(0, month - 1).reduce((acc, cur) => acc + cur, 0) + day;
};
// @lc code=end
