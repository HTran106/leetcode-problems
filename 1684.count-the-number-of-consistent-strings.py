#
# @lc app=leetcode id=1684 lang=python
#
# [1684] Count the Number of Consistent Strings
#

# @lc code=start
class Solution(object):
    def countConsistentStrings(self, allowed, words):
        """
        :type allowed: str
        :type words: List[str]
        :rtype: int
        """

        result = 0
        for word in words:
            if self.isGood(word, allowed):
                result += 1

        return result

# @lc code=end
