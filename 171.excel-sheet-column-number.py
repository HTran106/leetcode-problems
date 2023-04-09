#
# @lc app=leetcode id=171 lang=python
#
# [171] Excel Sheet Column Number
#

# @lc code=start
class Solution(object):
    def titleToNumber(self, columnTitle):
        """
        :type columnTitle: str
        :rtype: int
        """

        # Approach 1: Brute Force
        # Time  complexity: O(n)
        # Space complexity: O(1)
        # res = 0
        # for i in range(len(columnTitle)):
        #     res = res * 26 + ord(columnTitle[i]) - ord("A") + 1
        # return res

        # Approach 2: Recursive
        # Time  complexity: O(n)
        # Space complexity: O(n)
        if not columnTitle:
            return 0
        return self.titleToNumber(columnTitle[:-1]) * 26 + ord(columnTitle[-1]) - ord("A") + 1

# @lc code=end
