#
# @lc app=leetcode id=908 lang=python
#
# [908] Smallest Range I
#

# @lc code=start
class Solution(object):
    def smallestRangeI(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """

        # 1. Find the minimum and maximum values in nums
        # 2. Calculate the difference between the minimum and maximum values
        # 3. Calculate the difference between the minimum and maximum values
        #    after adding k to the minimum value and subtracting k from the
        #    maximum value

        # 1. Find the minimum and maximum values in nums
        min_value = min(nums)
        max_value = max(nums)

        # 2. Calculate the difference between the minimum and maximum values
        diff = max_value - min_value

        # 3. Calculate the difference between the minimum and maximum values
        #    after adding k to the minimum value and subtracting k from the
        #    maximum value
        if diff <= 2 * k:
            return 0
        else:
            return diff - 2 * k

# @lc code=end
