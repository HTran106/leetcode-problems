/*
 * @lc app=leetcode id=1436 lang=javascript
 *
 * [1436] Destination City
 */

// @lc code=start
/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    const map = new Map();
    paths.forEach(path => {
        map.set(path[0], path[1]);
    });

    let current = paths[0][0];
    while (map.has(current)) {
        current = map.get(current);
    }

    return current;
};
// @lc code=end
