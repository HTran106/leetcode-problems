/*
 * @lc app=leetcode id=1496 lang=javascript
 *
 * [1496] Path Crossing
 */

// @lc code=start
/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    const map = {};
    let x = 0;
    let y = 0;
    map[`${x},${y}`] = true;

    for (let i = 0; i < path.length; i++) {
        const direction = path[i];
        switch (direction) {
            case 'N':
                y++;
                break;
            case 'S':
                y--;
                break;
            case 'E':
                x++;
                break;
            case 'W':
                x--;
                break;
        }
        const key = `${x},${y}`;
        if (map[key]) {
            return true;
        }
        map[key] = true;
    }

    return false;
};
// @lc code=end
