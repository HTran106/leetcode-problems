#
# @lc app=leetcode id=1636 lang=python
#
# [1636] Sort Array by Increasing Frequency
#

# @lc code=start
class Solution(object):
    def frequencySort(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """

        return sorted(nums, key=lambda x: (nums.count(x), -x))
# @lc code=end
