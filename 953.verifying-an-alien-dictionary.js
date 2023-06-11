/*
 * @lc app=leetcode id=953 lang=javascript
 *
 * [953] Verifying an Alien Dictionary
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    const map = {};
    for (let i = 0; i < order.length; i++) {
        map[order[i]] = i;
    }

    const compare = (a, b) => {
        let i = 0;
        let j = 0;
        while (i < a.length && j < b.length) {
            if (map[a[i]] < map[b[j]]) return -1;
            if (map[a[i]] > map[b[j]]) return 1;
            i++;
            j++;
        }
        return a.length - b.length;
    }

    for (let i = 1; i < words.length; i++) {
        if (compare(words[i - 1], words[i]) > 0) return false;
    }

    return true;
};
// @lc code=end
