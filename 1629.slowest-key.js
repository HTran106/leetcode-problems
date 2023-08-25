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
var slowestKey = function (releaseTimes, keysPressed) {
    let max = releaseTimes[0];
    let maxChar = keysPressed[0];
    for (let i = 1; i < releaseTimes.length; i++) {
        const time = releaseTimes[i] - releaseTimes[i - 1];
        if (time > max) {
            max = time;
            maxChar = keysPressed[i];
        } else if (time === max && keysPressed[i] > maxChar) {
            maxChar = keysPressed[i];
        }
    }
    return maxChar;
};
// @lc code=end
