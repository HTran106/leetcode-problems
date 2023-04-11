#
# @lc app=leetcode id=401 lang=python
#
# [401] Binary Watch
#

# @lc code=start
class Solution(object):
    def readBinaryWatch(self, turnedOn):
        """
        :type turnedOn: int
        :rtype: List[str]
        """

        # Approach 1: Brute Force
        # Time  complexity: O(1)
        # Space complexity: O(1)
        res = []
        for h in range(12):
            for m in range(60):
                if (bin(h) + bin(m)).count("1") == turnedOn:
                    res.append("%d:%02d" % (h, m))
        return res

        # Approach 2: Bit Manipulation
        # Time  complexity: O(1)
        # Space complexity: O(1)
        # return ["%d:%02d" % (h, m) for h in range(12) for m in range(60) if (bin(h) + bin(m)).count("1") == turnedOn]

# @lc code=end
