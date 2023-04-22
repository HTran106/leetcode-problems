#
# @lc app=leetcode id=836 lang=python
#
# [836] Rectangle Overlap
#

# @lc code=start
class Solution(object):
    def isRectangleOverlap(self, rec1, rec2):
        """
        :type rec1: List[int]
        :type rec2: List[int]
        :rtype: bool
        """

        # 1. Check if the rectangles are not overlapping
        # 2. Check if the rectangles are overlapping

        # 1. Check if the rectangles are not overlapping
        if rec1[2] <= rec2[0] or rec1[0] >= rec2[2]:
            return False
        if rec1[3] <= rec2[1] or rec1[1] >= rec2[3]:
            return False

        # 2. Check if the rectangles are overlapping
        return True

# @lc code=end
