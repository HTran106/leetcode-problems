#
# @lc app=leetcode id=495 lang=python
#
# [495] Teemo Attacking
#

# @lc code=start
class Solution(object):
    def findPoisonedDuration(self, timeSeries, duration):
        """
        :type timeSeries: List[int]
        :type duration: int
        :rtype: int
        """

        # Approach 1: Greedy
        # Time  complexity: O(n)
        # Space complexity: O(1)
        res = 0
        for i in range(len(timeSeries) - 1):
            res += min(timeSeries[i + 1] - timeSeries[i], duration)
        return res + duration if timeSeries else 0

# @lc code=end
