#
# @lc app=leetcode id=119 lang=python
#
# [119] Pascal's Triangle II
#

# @lc code=start
class Solution(object):
    def getRow(self, rowIndex):
        """
        :type rowIndex: int
        :rtype: List[int]
        """
        if rowIndex == 0:
            return [1]
        elif rowIndex == 1:
            return [1, 1]
        row = [1, 1]
        for i in range(2, rowIndex + 1):
            row = [1] + [row[j] + row[j+1] for j in range(i-1)] + [1]
        return row

# @lc code=end
