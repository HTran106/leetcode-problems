#
# @lc app=leetcode id=492 lang=python
#
# [492] Construct the Rectangle
#

# @lc code=start
class Solution(object):
    def constructRectangle(self, area):
        """
        :type area: int
        :rtype: List[int]
        """

        # Approach 1: Brute Force
        # Time  complexity: O(sqrt(n))
        # Space complexity: O(1)
        # w = int(math.sqrt(area))
        # while area % w != 0:
        #     w -= 1
        # return [area // w, w]

        # Approach 2: Math
        # Time  complexity: O(sqrt(n))
        # Space complexity: O(1)
        w = int(math.sqrt(area))
        while area % w != 0:
            w -= 1
        return [area // w, w]

# @lc code=end
