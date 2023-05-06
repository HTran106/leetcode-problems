#
# @lc app=leetcode id=942 lang=python
#
# [942] DI String Match
#

# @lc code=start
class Solution(object):
    def diStringMatch(self, s):
        """
        :type s: str
        :rtype: List[int]
        """

        result = []
        i = 0
        j = len(s)

        for c in s:
            if c == 'I':
                result.append(i)
                i += 1
            else:
                result.append(j)
                j -= 1

        result.append(i)

        return result
# @lc code=end
