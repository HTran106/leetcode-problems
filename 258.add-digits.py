#
# @lc app=leetcode id=258 lang=python
#
# [258] Add Digits
#

# @lc code=start
class Solution(object):
    def addDigits(self, num):
        """
        :type num: int
        :rtype: int
        """

        if num == 0:
            return 0

        return (num - 1) % 9 + 1

# @lc code=end
