#
# @lc app=leetcode id=883 lang=python
#
# [883] Projection Area of 3D Shapes
#

# @lc code=start
class Solution(object):
    def projectionArea(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """

        # 1. Calculate the area of the xy plane
        # 2. Calculate the area of the xz plane
        # 3. Calculate the area of the yz plane

        # 1. Calculate the area of the xy plane
        area_xy = 0
        for row in grid:
            for cell in row:
                if cell != 0:
                    area_xy += 1

        # 2. Calculate the area of the xz plane
        area_xz = 0
        for row in grid:
            area_xz += max(row)

        # 3. Calculate the area of the yz plane
        area_yz = 0
        for col in zip(*grid):
            area_yz += max(col)

        return area_xy + area_xz + area_yz

# @lc code=end
