/*
 * @lc app=leetcode id=383 lang=javascript
 *
 * [383] Ransom Note
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    // return magazine.length >= ransomNote.length && [...ransomNote].every(c => {
    //     let i = magazine.indexOf(c);
    //     if (i >= 0) {
    //         magazine = magazine.slice(0, i) + magazine.slice(i + 1);
    //         return true;
    //     }
    //     return false;
    // }
    // );
    // magazine = magazine.split('')
    // console.log('abcdef'.slice(2))
    for (let char of ransomNote) {
        if (magazine.indexOf(char) !== -1) magazine = magazine.slice(0, magazine.indexOf(char)) + magazine.slice(magazine.indexOf(char) + 1)
        else return false
    }
    return true
};
// @lc code=end


// return magazine.length >= ransomNote.length && [...ransomNote].every(c => {
    //     let i = magazine.indexOf(c);
    //     if (i >= 0) {
    //         magazine = magazine.slice(0, i) + magazine.slice(i + 1);
    //         return true;
    //     }
    //     return false;
    // }
    // );
