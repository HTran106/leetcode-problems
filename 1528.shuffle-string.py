#
# @lc app=leetcode id=1528 lang=python
#
# [1528] Shuffle String
#

# @lc code=start
class Solution(object):
    def restoreString(self, s, indices):
        """
        :type s: str
        :type indices: List[int]
        :rtype: str
        """

        result = [None] * len(s)
        for i, index in enumerate(indices):
            result[index] = s[i]

        return "".join(result)
# @lc code=end
