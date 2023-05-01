#
# @lc app=leetcode id=594 lang=python
#
# [594] Longest Harmonious Subsequence
#

# @lc code=start
class Solution(object):
    def findLHS(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """

        # Time Limit Exceeded
        if len(nums) == len(set(nums)):
            return 0

        result = 0
        for i in range(len(nums)):
            for j in range(i+1, len(nums)):
                if abs(nums[i] - nums[j]) == 1:
                    result = max(result, j - i + 1)

        return result

        # Time Limit Exceeded
        # if len(nums) == len(set(nums)):
        #     return 0

        # result = 0
        # for i in range(len(nums)):
        #     for j in range(i+1, len(nums)):
        #         if abs(nums[i] - nums[j]) == 1:
        #             result = max(result, j - i + 1)

        # return result

        # Time Limit Exceeded
        # if len(nums) == len(set(nums)):
        #     return 0

        # result = 0
        # for i in range(len(nums)):
        #     for j in range(i+1, len(nums)):
        #         if abs(nums[i] - nums[j]) == 1:
        #             result = max(result, j - i + 1)

        # return result

        # Time Limit Exceeded
        # if len(nums) == len(set(nums)):
        #     return 0

        # result = 0
        # for i in range(len(nums)):
        #     for j in range(i+1, len(nums)):
        #         if abs(nums[i] - nums[j]) == 1:
        #             result = max(result, j - i + 1)

        # return result

        # Time Limit Exceeded
        # if len(nums) == len(set(nums)):
        #     return 0

        # result = 0
        # for i in range(len(nums)):
        #     for j in range(i+1, len(nums)):
        #         if abs(nums[i] - nums[j]) == 1:
        #             result = max(result, j - i + 1)

        # return result

# @lc code=end
