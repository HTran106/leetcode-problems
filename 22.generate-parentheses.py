#
# @lc app=leetcode id=22 lang=python
#
# [22] Generate Parentheses
#

# @lc code=start
class Solution(object):
    def generateParenthesis(self, n):
        """
        :type n: int
        :rtype: List[str]
        """

        def generateParenthesisHelper(n, left, right, s, result):
            if left == n and right == n:
                result.append(s)
            else:
                if left < n:
                    generateParenthesisHelper(n, left + 1, right, s + '(', result)
                if right < left:
                    generateParenthesisHelper(n, left, right + 1, s + ')', result)

        result = []
        generateParenthesisHelper(n, 0, 0, '', result)
        return result
# @lc code=end
