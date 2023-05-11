#
# @lc app=leetcode id=1160 lang=python
#
# [1160] Find Words That Can Be Formed by Characters
#

# @lc code=start
class Solution(object):
    def countCharacters(self, words, chars):
        """
        :type words: List[str]
        :type chars: str
        :rtype: int
        """

        result = 0
        for word in words:
            if self.isGood(word, chars):
                result += len(word)

        return result

# @lc code=end
