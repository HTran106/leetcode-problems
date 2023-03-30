#
# @lc app=leetcode id=290 lang=python
#
# [290] Word Pattern
#

# @lc code=start
class Solution(object):
    def wordPattern(self, pattern, s):
        """
        :type pattern: str
        :type s: str
        :rtype: bool
        """

        words = s.split()
        if len(pattern) != len(words):
            return False

        return len(set(zip(pattern, words))) == len(set(pattern)) == len(set(words))

# @lc code=end
