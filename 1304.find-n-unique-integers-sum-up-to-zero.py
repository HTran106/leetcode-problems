#
# @lc app=leetcode id=1304 lang=python
#
# [1304] Find N Unique Integers Sum up to Zero
#

# @lc code=start
class Solution(object):
    def sumZero(self, n):
        """
        :type n: int
        :rtype: List[int]
        """

        result = []
        for i in range(1, n // 2 + 1):
            result.append(i)
            result.append(-i)

        if n % 2 == 1:
            result.append(0)

        return result

# @lc code=end
