#
# @lc app=leetcode id=32 lang=python
#
# [32] Longest Valid Parentheses
#

# @lc code=start
class Solution(object):
    def longestValidParentheses(self, s):
        """
        :type s: str
        :rtype: int
        """

        stack = []
        for i in range(len(s)):
            if s[i] == '(':
                stack.append(i)
            else:
                if len(stack) > 0 and s[stack[-1]] == '(':
                    stack.pop()
                else:
                    stack.append(i)

        if len(stack) == 0:
            return len(s)

        max_len = 0
        a = len(s)
        while len(stack) > 0:
            b = stack.pop()
            max_len = max(max_len, a - b - 1)
            a = b
        max_len = max(max_len, a)

        return max_len
# @lc code=end
