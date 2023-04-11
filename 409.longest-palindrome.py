#
# @lc app=leetcode id=409 lang=python
#
# [409] Longest Palindrome
#

# @lc code=start
class Solution(object):
    def longestPalindrome(self, s):
        """
        :type s: str
        :rtype: int
        """

        # Approach 1: Hash Table
        # Time  complexity: O(n)
        # Space complexity: O(n)
        # d = {}
        # for c in s:
        #     d[c] = d.get(c, 0) + 1
        # res = 0
        # for v in d.values():
        #     res += v // 2 * 2
        #     if res % 2 == 0 and v % 2 == 1:
        #         res += 1
        # return res

        # Approach 2: Hash Table
        # Time  complexity: O(n)
        # Space complexity: O(n)
        d = set()
        for c in s:
            if c in d:
                d.remove(c)
            else:
                d.add(c)
        return len(s) - len(d) + 1 if d else len(s)

# @lc code=end
