#
# @lc app=leetcode id=455 lang=python
#
# [455] Assign Cookies
#

# @lc code=start
class Solution(object):
    def findContentChildren(self, g, s):
        """
        :type g: List[int]
        :type s: List[int]
        :rtype: int
        """

        # Approach 1: Greedy
        # Time  complexity: O(nlogn)
        # Space complexity: O(1)
        g.sort()
        s.sort()
        res = 0
        i = j = 0
        while i < len(g) and j < len(s):
            if g[i] <= s[j]:
                res += 1
                i += 1
            j += 1
        return res

# @lc code=end
