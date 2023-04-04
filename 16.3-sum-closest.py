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
            j = i + 1
            k = len(nums) - 1
            while j < k:
                s = nums[i] + nums[j] + nums[k]
                if closest is None or abs(s - target) < abs(closest - target):
                    closest = s
                if s < target:
                    j += 1
                elif s > target:
                    k -= 1
                else:
                    return target
        return closest

# @lc code=end
