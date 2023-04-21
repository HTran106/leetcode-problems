#
# @lc app=leetcode id=771 lang=python
#
# [771] Jewels and Stones
#

# @lc code=start
class Solution(object):
    def numJewelsInStones(self, jewels, stones):
        """
        :type jewels: str
        :type stones: str
        :rtype: int
        """

        # 1. Create a dictionary to store the frequency of each stone
        # 2. Count the number of jewels in stones

        # 1. Create a dictionary to store the frequency of each stone
        frequency = {}
        for stone in stones:
            if stone not in frequency:
                frequency[stone] = 1
            else:
                frequency[stone] += 1

        # 2. Count the number of jewels in stones
        count = 0
        for jewel in jewels:
            if jewel in frequency:
                count += frequency[jewel]

        return count

# @lc code=end
