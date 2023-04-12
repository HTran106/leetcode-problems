#
# @lc app=leetcode id=459 lang=python
#
# [459] Repeated Substring Pattern
#

# @lc code=start
class Solution(object):
    def repeatedSubstringPattern(self, s):
        """
        :type s: str
        :rtype: bool
        """

        # Approach 1: Brute Force
        # Time  complexity: O(n^2)
        # Space complexity: O(n)
        for i in range(1, len(s) // 2 + 1):
            if len(s) % i == 0:
                if all(s[j] == s[j - i] for j in range(i, len(s))):
                    return True
        return False

        # Approach 2: KMP
        # Time  complexity: O(n)
        # Space complexity: O(n)
        # s += s
        # return s[1:-1].find(s) != -1

        # Approach 3: KMP
        # Time  complexity: O(n)
        # Space complexity: O(n)
        # s += s
        # return s[1:-1].find(s) != -1

        # Approach 4: KMP
        # Time  complexity: O(n)
        # Space complexity: O(n)
        # s += s
        # return s[1:-1].find(s) != -1

# @lc code=end
