/*
 * @lc app=leetcode id=1184 lang=javascript
 *
 * [1184] Distance Between Bus Stops
 */

// @lc code=start
/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
    const n = distance.length;
    let clockwise = 0;
    for (let i = start; i !== destination; i = (i + 1) % n) {
        clockwise += distance[i];
    }
    let counterclockwise = 0;
    for (let i = start; i !== destination; i = (i - 1 + n) % n) {
        counterclockwise += distance[(i - 1 + n) % n];
    }
};
// @lc code=end
