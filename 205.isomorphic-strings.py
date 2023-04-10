#
# @lc app=leetcode id=205 lang=python
#
# [205] Isomorphic Strings
#

# @lc code=start
class Solution(object):
    def isIsomorphic(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """

        # Approach 1: Hash Table
        # Time  complexity: O(n)
        # Space complexity: O(n)
        # if len(s) != len(t):
        #     return False
        # d1 = {}
        # d2 = {}
        # for i in range(len(s)):
        #     if s[i] not in d1:
        #         d1[s[i]] = t[i]
        #     if t[i] not in d2:
        #         d2[t[i]] = s[i]
        #     if d1[s[i]] != t[i] or d2[t[i]] != s[i]:
        #         return False
        # return True

        # Approach 2: Hash Table
        # Time  complexity: O(n)
        # Space complexity: O(n)
        return len(set(zip(s, t))) == len(set(s)) == len(set(t))

# @lc code=end
