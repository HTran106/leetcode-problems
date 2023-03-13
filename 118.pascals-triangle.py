#
# @lc app=leetcode id=118 lang=python
#
# [118] Pascal's Triangle
#

# @lc code=start
class Solution(object):
    def generate(self, numRows):
        """
        :type numRows: int
        :rtype: List[List[int]]
        """
        if len(triangle) == 1:
            return [[1]]
        elif len(triangle) == 2:
            return [[1], [1, 1]]

        triangle = [[1], [1, 1]]
        for i in range(2, numRows):
            
# @lc code=end
