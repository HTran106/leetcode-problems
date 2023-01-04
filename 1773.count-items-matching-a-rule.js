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
    // let count = 0
    return items.filter(item => {
        const [type, color, name] = item
        if (ruleKey === 'color' && color === ruleValue) return item
        if (ruleKey === 'type' && type === ruleValue) return item
        if (ruleKey === 'name' && name === ruleValue) return item
    }).length
    // return count
};
// @lc code=end
