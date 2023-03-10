#
# @lc app=leetcode id=20 lang=python
#
# [20] Valid Parentheses
#

# @lc code=start
class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        stack = []
        for char in s:
            if char in ['(', '[', '{']:
                stack.append(char)
            else:
                if len(stack) == 0:
                    return False
                else:
                    if char == ')' and stack[-1] == '(':
                        stack.pop()
                    elif char == ']' and stack[-1] == '[':
                        stack.pop()
                    elif char == '}' and stack[-1] == '{':
                        stack.pop()
                    else:
                        return False


# @lc code=end
