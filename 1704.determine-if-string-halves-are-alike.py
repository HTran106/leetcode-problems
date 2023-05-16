#
# @lc app=leetcode id=1704 lang=python
#
# [1704] Determine if String Halves Are Alike
#

# @lc code=start
class Solution(object):
    def halvesAreAlike(self, s):
        """
        :type s: str
        :rtype: bool
        """

        def isVowel(c):
            return c in "aeiouAEIOU"

        half = len(s) / 2
        return sum(isVowel(c) for c in s[:half]) == sum(isVowel(c) for c in s[half:])

# @lc code=end
