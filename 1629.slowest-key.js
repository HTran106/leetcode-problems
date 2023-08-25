/*
 * @lc app=leetcode id=1629 lang=javascript
 *
 * [1629] Slowest Key
 */

// @lc code=start
/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
    const map = {};
    let max = -1;
    for (let i = 0; i < releaseTimes.length; i++) {
        const time = releaseTimes[i];
        const char = keysPressed[i];
        if (map[char] === undefined) {
            map[char] = time;
        } else {
            map[char] = Math.max(map[char], time - releaseTimes[i - 1]);
        }
        max = Math.max(max, map[char]);
    }
};
// @lc code=end
