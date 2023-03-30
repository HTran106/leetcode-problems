#
# @lc app=leetcode id=350 lang=python
#
# [350] Intersection of Two Arrays II
#

# @lc code=start
class Solution(object):
    def intersect(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: List[int]
        """

        nums1.sort()
        nums2.sort()

        i = j = 0
        result = []
        while i < len(nums1) and j < len(nums2):
            if nums1[i] == nums2[j]:
                results.append(nums1[i])


# @lc code=end
