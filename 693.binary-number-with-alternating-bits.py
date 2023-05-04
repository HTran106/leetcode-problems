#
# @lc app=leetcode id=693 lang=python
#
# [693] Binary Number with Alternating Bits
#

# @lc code=start
class Solution(object):
    def hasAlternatingBits(self, n):
        """
        :type n: int
        :rtype: bool
        """

        binary = bin(n)[2:]
        for i in range(1, len(binary)):
            if binary[i] == binary[i-1]:
                return False

        return True
# @lc code=end
