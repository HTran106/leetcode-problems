/*
 * @lc app=leetcode id=1700 lang=javascript
 *
 * [1700] Number of Students Unable to Eat Lunch
 */

// @lc code=start
/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    const map = {};
    for (const student of students) {
        map[student] = (map[student] || 0) + 1;
    }
    for (const sandwich of sandwiches) {
        if (map[sandwich] === 0) {
            break;
        }
        map[sandwich]--;
    }
    return Object.values(map).reduce((acc, cur) => acc + cur, 0);
};
// @lc code=end
