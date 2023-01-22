/*
 * @lc app=leetcode id=599 lang=javascript
 *
 * [599] Minimum Index Sum of Two Lists
 */

// @lc code=start
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let currMax = Infinity
    let res = []
    for (let i = 0; i < list1.length; i++) {
        let word1 = list1[i]
        for (let j = 0; j < list2.length; j++) {
            let word2 = list2[j]
            if (word1 === word2 && i + j <= currMax) {
                res.push(word1)
                currMax = i + j
            }
        }
    }
    return res
};
// @lc code=end
