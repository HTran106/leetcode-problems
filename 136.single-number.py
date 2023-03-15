#
# @lc app=leetcode id=136 lang=python
#
# [136] Single Number
#

# @lc code=start
import functools

class Solution(object):
    def singleNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        # return 2 * sum(set(nums)) - sum(nums)
        # return reduce(lambda x, y: x ^ y, nums)
        # return reduce(operator.xor, nums)
        # return functools.reduce(operator.xor, nums)
        return functools.reduce(lambda x, y: x ^ y, nums)
# @lc code=end
