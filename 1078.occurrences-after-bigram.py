#
# @lc app=leetcode id=1078 lang=python
#
# [1078] Occurrences After Bigram
#

# @lc code=start
class Solution(object):
    def findOcurrences(self, text, first, second):
        """
        :type text: str
        :type first: str
        :type second: str
        :rtype: List[str]
        """

        words = text.split(" ")
        result = []
        for i in range(len(words) - 2):
            if words[i] == first and words[i + 1] == second:
                result.append(words[i + 2])

        return result

# @lc code=end
