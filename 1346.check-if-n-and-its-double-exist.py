#
# @lc app=leetcode id=1346 lang=python
#
# [1346] Check If N and Its Double Exist
#

# @lc code=start
class Solution(object):
    def checkIfExist(self, arr):
        """
        :type arr: List[int]
        :rtype: bool
        """

        for i in range(len(arr)):
            for j in range(len(arr)):
                if i != j and arr[i] == 2 * arr[j]:
                    return True

        return False

# @lc code=end
