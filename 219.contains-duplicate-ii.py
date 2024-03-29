#
# @lc app=leetcode id=219 lang=python
#
# [219] Contains Duplicate II
#

# @lc code=start
class Solution(object):
    def containsNearbyDuplicate(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: bool
        """

        if len(nums) == len(set(nums)):
            return False

        for i in range(len(nums)):
            for j in range(i+1, len(nums)):
                if nums[i] == nums[j] and j - i <= k:
                    return True

        return False

# @lc code=end
