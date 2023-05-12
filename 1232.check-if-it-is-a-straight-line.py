#
# @lc app=leetcode id=1232 lang=python
#
# [1232] Check If It Is a Straight Line
#

# @lc code=start
class Solution(object):
    def checkStraightLine(self, coordinates):
        """
        :type coordinates: List[List[int]]
        :rtype: bool
        """

        if len(coordinates) == 2:
            return True

        # y = mx + b
        # m = (y2 - y1) / (x2 - x1)
        # b = y - mx
        x1 = coordinates[0][0]
        y1 = coordinates[0][1]
        x2 = coordinates[1][0]
        y2 = coordinates[1][1]

        if x2 - x1 == 0:
            return False

        m = (y2 - y1) / (x2 - x1)
        b = y1 - m * x1

        for i in range(2, len(coordinates)):
            x = coordinates[i][0]
            y = coordinates[i][1]

            if y != m * x + b:
                return False

        return True
# @lc code=end
