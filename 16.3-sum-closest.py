#
# @lc app=leetcode id=16 lang=python
#
# [16] 3Sum Closest
#

# @lc code=start
class Solution(object):
    def threeSumClosest(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """

        nums.sort()
        closest = None
        for i in range(len(nums) - 2):
            if i > 0 and nums[i] == nums[i - 1];
                continue
            l, r = i + 1, len(nums) - 1
            while l < r:
                s = nums[i] + nums[l] + nums[r]
                if s == target:
                    return target
                if closest is None or abs(s - target) < abs(closest - target):
                    closest = s
                if s < target:
                    l += 1
                else:
                    r -= 1

# @lc code=end
