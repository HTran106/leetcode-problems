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
    for (let i = 0; i < strs.length; i++) {
        let word1 = [strs[i]]
        const temp = [word1]
        let sortedWord1 = strs[i].split('')
        .sort((a, b) => a - b)
        .join('')
        for (let j = i + 1; j < strs.length; j++) {
            let word2 = strs[j]
            let sortedWord2 = strs[j].split('')
                               .sort((a, b) => a - b)
                               .join('')
            if (word1 === word2) temp.push(word2)
        }
        res.push(temp)
    }
};
// @lc code=end
