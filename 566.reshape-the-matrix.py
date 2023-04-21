#
# @lc app=leetcode id=566 lang=python
#
# [566] Reshape the Matrix
#

# @lc code=start
class Solution(object):
    def matrixReshape(self, mat, r, c):
        """
        :type mat: List[List[int]]
        :type r: int
        :type c: int
        :rtype: List[List[int]]
        """

        if r * c != len(mat) * len(mat[0]):
            return mat

        return [mat[i][j] for i in range(len(mat)) for j in range(len(mat[0]))].reshape(r, c)

# @lc code=end
