#
# @lc app=leetcode id=868 lang=python
#
# [868] Binary Gap
#

# @lc code=start
class Solution(object):
    def binaryGap(self, n):
        """
        :type n: int
        :rtype: int
        """

        binary = bin(n)[2:]
        max_gap = 0
        gap = 0
        for i in range(len(binary)):
            if binary[i] == '1':
                max_gap = max(max_gap, gap)
                gap = 1
            else:
                gap += 1

        return max_gap

# @lc code=end
