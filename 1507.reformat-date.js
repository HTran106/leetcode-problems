/*
 * @lc app=leetcode id=1507 lang=javascript
 *
 * [1507] Reformat Date
 */

// @lc code=start
/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function(date) {
    const months = {
        Jan: '01',
        Feb: '02',
        Mar: '03',
        Apr: '04',
        May: '05',
        Jun: '06',
        Jul: '07',
        Aug: '08',
        Sep: '09',
        Oct: '10',
        Nov: '11',
        Dec: '12',
    };
    const [day, month, year] = date.split(' ');
    const dayNum = day.slice(0, day.length - 2);
    const monthNum = months[month];
    const yearNum = year;
    return `${yearNum}-${monthNum}-${dayNum.length === 1 ? '0' + dayNum : dayNum}`;
};
// @lc code=end
