/*
 * @lc app=leetcode id=884 lang=javascript
 *
 * [884] Uncommon Words from Two Sentences
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
    s1 = s1.split(' ');
    s2 = s2.split(' ');
    let map = {};
    for (let i = 0; i < s1.length; i++) {
        map[s1[i]] = map[s1[i]] ? map[s1[i]] + 1 : 1;
    }
    for (let i = 0; i < s2.length; i++) {
        map[s2[i]] = map[s2[i]] ? map[s2[i]] + 1 : 1;
    }
    let res = [];
    for (let key in map) {
        if (map[key] === 1) res.push(key);
    }
    return res;
};
// @lc code=end
