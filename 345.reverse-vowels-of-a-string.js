/*
 * @lc app=leetcode id=345 lang=javascript
 *
 * [345] Reverse Vowels of a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let sArr = s.split('');
    let i = 0;
    let j = sArr.length - 1;
    while (i < j) {
        while (i < j && !vowels.includes(sArr[i])) {
            i++;
        }
        while (i < j && !vowels.includes(sArr[j])) {
            j--;
        }
        if (i < j) {
            let temp = sArr[i];
            sArr[i] = sArr[j];
            sArr[j] = temp;
            i++;
            j--;
        }
    }
    return sArr.join('');
};
// @lc code=end
