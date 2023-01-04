/*
 * @lc app=leetcode id=1773 lang=javascript
 *
 * [1773] Count Items Matching a Rule
 */

// @lc code=start
/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let count = 0
    items.forEach(item => {
        const [type, color, name] = item
        if (ruleKey === 'color' && color === ruleValue) count++
        if (ruleKey === 'type' && type === ruleValue) count++
        if (ruleKey === 'name' && name === ruleValue) count++
    })
    return count
};
// @lc code=end
