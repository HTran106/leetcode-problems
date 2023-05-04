#
# @lc app=leetcode id=696 lang=python
#
# [696] Count Binary Substrings
#

# @lc code=start
class Solution(object):
    def countBinarySubstrings(self, s):
        """
        :type s: str
        :rtype: int
        """

        # 1. Group the string by the same character
        # 2. Count the number of 0s and 1s in each group
        # 3. The number of valid substrings is the minimum of the number of 0s and 1s in each group

        groups = []
        count = 1
        for i in range(1, len(s)):
            if s[i] == s[i-1]:
                count += 1
            else:
                groups.append(count)
                count = 1
        groups.append(count)

        result = 0
        for i in range(1, len(groups)):
            result += min(groups[i-1], groups[i])

        return result

# @lc code=end
