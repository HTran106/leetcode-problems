#
# @lc app=leetcode id=806 lang=python
#
# [806] Number of Lines To Write String
#

# @lc code=start
class Solution(object):
    def numberOfLines(self, widths, s):
        """
        :type widths: List[int]
        :type s: str
        :rtype: List[int]
        """

        # 1. Create a dictionary to store the width of each letter
        # 2. Count the number of lines and the width of the last line

        # 1. Create a dictionary to store the width of each letter
        width = {}
        for i in range(len(widths)):
            width[chr(ord('a') + i)] = widths[i]

        # 2. Count the number of lines and the width of the last line
        lines = 1
        width_of_last_line = 0
        for letter in s:
            if width_of_last_line + width[letter] > 100:
                lines += 1
                width_of_last_line = width[letter]
            else:
                width_of_last_line += width[letter]

        return [lines, width_of_last_line]

# @lc code=end
