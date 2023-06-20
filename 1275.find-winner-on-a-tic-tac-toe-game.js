/*
 * @lc app=leetcode id=1275 lang=javascript
 *
 * [1275] Find Winner on a Tic Tac Toe Game
 */

// @lc code=start
/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
    const board = [[], [], []];
    for (let i = 0; i < moves.length; i++) {
        const [x, y] = moves[i];
        board[x][y] = i % 2 ? 'O' : 'X';
    }
    
};
// @lc code=end
