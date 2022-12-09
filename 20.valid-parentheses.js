/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */

/*
input: string '()' '{}' '[]'
output: boolean
first check to see if the string is even or odd, if even continue if odd return false.
initialize a stack
for loop to iterate through the string
if the char is a left bracket parenthesis curly
add to stack
else
remove the last char
check if it has the correct closing bracket
if it doesn't, return false

check
*/


var isValid = function(s) {
   if (s.length % 2 !== 0) return false
   const stack = []
    for (let i = 0; i < s.length; i++) {
        let char = s[i]
    if (char === '[' || char === '(' || char === '{') stack.push(char)
    else {
        console.log(stack)
        const last = stack.pop()
        if (char === ']' && last !== '[') return false
        if (char === '}' && last !== '{') return false
        if (char === ')' && last !== '(') return false
    }
   }
   return stack.length === 0
};
// @lc code=end
