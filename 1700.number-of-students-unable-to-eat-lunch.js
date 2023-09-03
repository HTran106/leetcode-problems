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
var countStudents = function (students, sandwiches) {
    if (students.length === 0) {
        return 0;
    }
    let count = 0;
    while (count < students.length) {
        if (students[0] === sandwiches[0]) {
            students.shift();
            sandwiches.shift();
            count = 0;
        } else {
            students.push(students.shift());
            count++;
        }
    }
    return students.length;
};
// @lc code=end
