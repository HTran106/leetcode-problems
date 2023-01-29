/*
 * @lc app=leetcode id=914 lang=javascript
 *
 * [914] X of a Kind in a Deck of Cards
 */

// @lc code=start
/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    let count = {}
    for (let i = 0; i < deck.length; i++) {
        count[deck[i]] = count[deck[i]] + 1 || 1
    }
    let min = Math.min(...Object.values(count))
    if (min < 2) return false
    for (let i = 2; i <= min; i++) {
        if (Object.values(count).every(v => v % i === 0)) return true
    }
    return false
};
// @lc code=end
