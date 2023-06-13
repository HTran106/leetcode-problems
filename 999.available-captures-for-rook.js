/*
 * @lc app=leetcode id=999 lang=javascript
 *
 * [999] Available Captures for Rook
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    const row = board.length;
    const col = board[0].length;
    let rookRow = 0;
    let rookCol = 0;

    for (let r = 0; r < row; r++) {
        for (let c = 0; c < col; c ++) {
            if (board[r][c] === 'R') {
                rookRow = r;
                rookCol = c;
                break;
            }
        }
    }

    let count = 0;
    for (let r = rookRow; r >= 0; r--) {
        if (board[r][rookCol] === 'B') break;
        if (board[r][rookCol] === 'p') {
            count++;
            break;
        }
    }

    for (let r = rookRow; r < row; r++) {
        if (board[r][rookCol] === 'B') break;
        if (board[r][rookCol] === 'p') {
            count++;
            break;
        }
    }

    for (let c = rookCol; c >= 0; c--) {
        if (board[rookRow][c] === 'B') break;
        if (board[rookRow][c] === 'p') {
            count++;
            break;
        }
    }

    

};
// @lc code=end
