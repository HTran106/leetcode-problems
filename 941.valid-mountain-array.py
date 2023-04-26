#
# @lc app=leetcode id=941 lang=python
#
# [941] Valid Mountain Array
#

# @lc code=start
class Solution(object):
    def validMountainArray(self, arr):
        """
        :type arr: List[int]
        :rtype: bool
        """

        # 1. Check if the array is a mountain array
        # 2. Check if the array is not a mountain array

        # 1. Check if the array is a mountain array
        if len(arr) < 3:
            return False

        # 2. Check if the array is not a mountain array
        if arr[0] >= arr[1]:
            return False
        if arr[-1] >= arr[-2]:
            return False

        # 1. Check if the array is a mountain array
        for i in range(1, len(arr)):
            if arr[i] == arr[i - 1]:
                return False
            if arr[i] < arr[i - 1]:
                break

        # 2. Check if the array is not a mountain array
        for i in range(i, len(arr)):
            if arr[i] >= arr[i - 1]:
                return False

        # 1. Check if the array is a mountain array
        return True

# @lc code=end
