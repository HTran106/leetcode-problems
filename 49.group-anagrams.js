/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let res = []
    let map = new Map()
    for (let i = 0; i < strs.length; i++) {
        let str = strs[i]
        let sorted = str.split('').sort().join('')
        if (map.has(sorted)) {
            let index = map.get(sorted)
            res[index].push(str)
        } else {
            res.push([str])
            map.set(sorted, res.length - 1)
        }
    }
    return res
};
// @lc code=end
