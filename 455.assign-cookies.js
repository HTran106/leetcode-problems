/*
 * @lc app=leetcode id=455 lang=javascript
 *
 * [455] Assign Cookies
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let count = {}
    let res = 0
    s.forEach(cookie => {
        count[cookie] ? count[cookie]++ : count[cookie] = 1
    })
    g.forEach(cookie => {
        if (count[cookie] - 1 >= 0) {
            res++
            count[cookie]--
        }
    })
    return res
};
// @lc code=end
