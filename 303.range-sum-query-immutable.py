#
# @lc app=leetcode id=303 lang=python
#
# [303] Range Sum Query - Immutable
#

# @lc code=start
class NumArray(object):

    def __init__(self, nums):
        """
        :type nums: List[int]
        """

        self.nums = nums
        self.sum = [0]
        for i in range(len(nums)):
            self.sum.append(self.sum[i] + nums[i])

    def sumRange(self, left, right):
        """
        :type left: int
        :type right: int
        :rtype: int
        """

        return self.sum[right + 1] - self.sum[left]


# Your NumArray object will be instantiated and called as such:
# obj = NumArray(nums)
# param_1 = obj.sumRange(left,right)
# @lc code=end
