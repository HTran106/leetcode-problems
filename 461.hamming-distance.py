#
# @lc app=leetcode id=461 lang=python
#
# [461] Hamming Distance
#

# @lc code=start
class Solution(object):
    def hammingDistance(self, x, y):
        """
        :type x: int
        :type y: int
        :rtype: int
        """

        # Approach 1: Bit Manipulation
        # Time  complexity: O(1)
        # Space complexity: O(1)
        return bin(x ^ y).count("1")

# @lc code=end
