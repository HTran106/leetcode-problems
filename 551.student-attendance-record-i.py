#
# @lc app=leetcode id=551 lang=python
#
# [551] Student Attendance Record I
#

# @lc code=start
class Solution(object):
    def checkRecord(self, s):
        """
        :type s: str
        :rtype: bool
        """

        return s.count("A") < 2 and s.count("LLL") == 0

# @lc code=end
