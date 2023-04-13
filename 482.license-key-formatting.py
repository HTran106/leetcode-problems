#
# @lc app=leetcode id=482 lang=python
#
# [482] License Key Formatting
#

# @lc code=start
class Solution(object):
    def licenseKeyFormatting(self, s, k):
        """
        :type s: str
        :type k: int
        :rtype: str
        """

        # Approach 1: String
        # Time  complexity: O(n)
        # Space complexity: O(n)
        s = s.replace("-", "").upper()
        res = ""
        for i in range(len(s) - 1, -1, -1):
            res = s[i] + res
            if i > 0 and (len(s) - i) % k == 0:
                res = "-" + res
        return res

# @lc code=end
