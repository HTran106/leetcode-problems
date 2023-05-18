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
};
// @lc code=end
