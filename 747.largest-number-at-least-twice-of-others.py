#
# @lc app=leetcode id=747 lang=python
#
# [747] Largest Number At Least Twice of Others
#

# @lc code=start
class Solution(object):
    def dominantIndex(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """

        # 1. Find the largest number
        # 2. Find the second largest number
        # 3. Return the index of the largest number if it is at least twice as much as every other number. Otherwise, return -1.

        # 1. Find the largest number
        largest_number = max(nums)

        # 2. Find the second largest number
        second_largest_number = None
        for num in nums:
            if num != largest_number:
                if second_largest_number is None:
                    second_largest_number = num
                else:
                    if num > second_largest_number:
                        second_largest_number = num

        # 3. Return the index of the largest number if it is at least twice as much as every other number. Otherwise, return -1.
        if second_largest_number is None:
            return 0
        else:
            if largest_number >= 2 * second_largest_number:
                return nums.index(largest_number)
            else:
                return -1

# @lc code=end
