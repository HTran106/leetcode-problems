/*
 * @lc app=leetcode id=1408 lang=javascript
 *
 * [1408] String Matching in an Array
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
    if (words.length === 0) {
        return [];
    }
    const result = [];
    const map = new Map();
    for (let i = 0; i < words.length; i++) {
        map.set(words[i], (map.get(words[i]) || 0) + 1);
    }
    const sortedKeys = [...map.keys()].sort((a, b) => a.length - b.length);

    for (let i = 0; i < sortedKeys.length; i++) {
        for (let j = i + 1; j < sortedKeys.length; j++) {
            if (sortedKeys[j].includes(sortedKeys[i])) {
                result.push(sortedKeys[i]);
                break;
            }
        }
    }

    return result;
};
// @lc code=end
