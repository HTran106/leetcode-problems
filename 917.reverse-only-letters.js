/*
 * @lc app=leetcode id=917 lang=javascript
 *
 * [917] Reverse Only Letters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
const isLetter = (c) => {
    const code = c.charCodeAt(0);
    return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
}

var reverseOnlyLetters = function(s) {
    const arr = s.split('');
    let l = 0;
    let r = arr.length - 1;

    while (l < r) {
        if (!isLetter(arr[l])) {
            l++;
            continue;
        }
        if (!isLetter(arr[r])) {
            r--;
            continue;
        }

        [arr[l], arr[r]] = [arr[r], arr[l]];
        l++;
        r--;
    }

    return arr.join('');
};
// @lc code=end
