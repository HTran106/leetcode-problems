#
# @lc app=leetcode id=1071 lang=python
#
# [1071] Greatest Common Divisor of Strings
#

# @lc code=start
class Solution(object):
    def gcdOfStrings(self, str1, str2):
        """
        :type str1: str
        :type str2: str
        :rtype: str
        """


        def gcd(a, b):
            if b == 0:
                return a
            return gcd(b, a % b)

        if str1 + str2 != str2 + str1:
            return ""
        return str1[:gcd(len(str1), len(str2))]

# @lc code=end
