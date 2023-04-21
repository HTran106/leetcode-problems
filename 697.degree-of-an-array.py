#
# @lc app=leetcode id=697 lang=python
#
# [697] Degree of an Array
#

# @lc code=start
class Solution(object):
    def findShortestSubArray(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """

        # 1. Find the degree of the array
        # 2. Find the shortest subarray with the same degree

        # 1. Find the degree of the array
        # 1.1 Create a dictionary to store the frequency of each element
        # 1.2 Find the maximum frequency
        # 1.3 Find the elements with the maximum frequency
        # 1.4 Find the shortest subarray with the same degree
        # 1.4.1 Find the first and last index of each element with the maximum frequency
        # 1.4.2 Find the shortest subarray

        # 1.1 Create a dictionary to store the frequency of each element
        frequency = {}
        for num in nums:
            if num not in frequency:
                frequency[num] = 1
            else:
                frequency[num] += 1

        # 1.2 Find the maximum frequency
        max_frequency = max(frequency.values())

        # 1.3 Find the elements with the maximum frequency
        elements = []
        for key, value in frequency.items():
            if value == max_frequency:
                elements.append(key)

        # 1.4 Find the shortest subarray with the same degree
        # 1.4.1 Find the first and last index of each element with the maximum frequency
        first_index = {}
        last_index = {}
        for element in elements:
            for index, num in enumerate(nums):
                if num == element:
                    if element not in first_index:
                        first_index[element] = index
                    else:
                        last_index[element] = index

        # 1.4.2 Find the shortest subarray
        shortest_subarray = len(nums)
        for element in elements:
            if last_index[element] - first_index[element] + 1 < shortest_subarray:
                shortest_subarray = last_index[element] - first_index[element] + 1

        return shortest_subarray

# @lc code=end
