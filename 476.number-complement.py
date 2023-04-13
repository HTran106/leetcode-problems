#
# @lc app=leetcode id=476 lang=python
#
# [476] Number Complement
#

# @lc code=start
class Solution(object):
    def findComplement(self, num):
        """
        :type num: int
        :rtype: int
        """

        # Approach 1: Bit Manipulation
        # Time  complexity: O(1)
        # Space complexity: O(1)
        # mask = 1
        # while mask < num:
        #     mask = (mask << 1) | 1
        # return num ^ mask

        # Approach 2: Bit Manipulation
        # Time  complexity: O(1)
        # Space complexity: O(1)
        return num ^ (2 ** (len(bin(num)) - 2) - 1)

# @lc code=end
