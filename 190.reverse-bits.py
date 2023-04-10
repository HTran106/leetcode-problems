#
# @lc app=leetcode id=190 lang=python
#
# [190] Reverse Bits
#

# @lc code=start
class Solution:
    # @param n, an integer
    # @return an integer
    def reverseBits(self, n):
        # Approach 1: Brute Force
        # Time  complexity: O(1)
        # Space complexity: O(1)
        # res = 0
        # for i in range(32):
        #     res = (res << 1) + (n & 1)
        #     n >>= 1
        # return res

        # Approach 2: Recursive
        # Time  complexity: O(1)
        # Space complexity: O(1)
        if n == 0:
            return 0
        return (n & 1) << 31 | self.reverseBits(n >> 1)
# @lc code=end
