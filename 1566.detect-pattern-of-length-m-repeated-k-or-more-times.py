#
# @lc app=leetcode id=1566 lang=python
#
# [1566] Detect Pattern of Length M Repeated K or More Times
#

# @lc code=start
class Solution(object):
    def containsPattern(self, arr, m, k):
        """
        :type arr: List[int]
        :type m: int
        :type k: int
        :rtype: bool
        """

        pattern = ""
        for i in range(len(arr)):
            current_character = arr[i]
            for j in range(1, len(arr)):
                if i == len(arr[j]) or current_character != arr[j][i]:
                    return pattern

            pattern += current_character

        return pattern

# @lc code=end
