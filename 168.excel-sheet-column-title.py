#
# @lc app=leetcode id=168 lang=python
#
# [168] Excel Sheet Column Title
#

# @lc code=start
class Solution(object):
    def convertToTitle(self, columnNumber):
        """
        :type columnNumber: int
        :rtype: str
        """

        # Approach 1: Brute Force
        # Time  complexity: O(n)
        # Space complexity: O(n)
        # if columnNumber == 0:
        #     return ""
        # res = ""
        # while columnNumber > 0:
        #     res = chr((columnNumber - 1) % 26 + ord("A")) + res
        #     columnNumber = (columnNumber - 1) // 26
        # return res

        # Approach 2: Recursive
        # Time  complexity: O(n)
        # Space complexity: O(n)
        if columnNumber == 0:
            return ""
        return self.convertToTitle((columnNumber - 1) // 26) + chr((columnNumber - 1) % 26 + ord("A"))

# @lc code=end
