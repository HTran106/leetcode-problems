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
};
// @lc code=end
