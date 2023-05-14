#
# @lc app=leetcode id=1576 lang=python
#
# [1576] Replace All ?'s to Avoid Consecutive Repeating Characters
#

# @lc code=start
class Solution(object):
    def modifyString(self, s):
        """
        :type s: str
        :rtype: str
        """

        result = ""
        for i, c in enumerate(s):
            if c == "?":
                for j in range(26):
                    if (i == 0 or chr(ord("a") + j) != result[i - 1]) and (i == len(s) - 1 or chr(ord("a") + j) != s[i + 1]):
                        result += chr(ord("a") + j)
                        break
            else:
                result += c

        return result

# @lc code=end
