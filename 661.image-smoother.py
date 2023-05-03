#
# @lc app=leetcode id=661 lang=python
#
# [661] Image Smoother
#

# @lc code=start
class Solution(object):
    def imageSmoother(self, img):
        """
        :type img: List[List[int]]
        :rtype: List[List[int]]
        """

        result = [[0 for i in range(len(img[0]))] for j in range(len(img))]

        for i in range(len(img)):
            for j in range(len(img[0])):
                result[i][j] = self.getAverage(img, i, j)

        return result

# @lc code=end
