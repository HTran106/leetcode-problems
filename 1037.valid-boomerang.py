#
# @lc app=leetcode id=1037 lang=python
#
# [1037] Valid Boomerang
#

# @lc code=start
class Solution(object):
    def isBoomerang(self, points):
        """
        :type points: List[List[int]]
        :rtype: bool
        """

        boom = True
        if points[0] == points[1] or points[1] == points[2] or points[0] == points[2]:
            boom = False
        else:
            if points[0][0] == points[1][0] == points[2][0]:
                boom = False
            elif points[0][1] == points[1][1] == points[2][1]:
                boom = False
            else:
                if (points[0][0] - points[1][0]) * (points[0][1] - points[2][1]) == (points[0][0] - points[2][0]) * (points[0][1] - points[1][1]):
                    boom = False
        return boom
# @lc code=end
