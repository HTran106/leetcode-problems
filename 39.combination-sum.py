#
# @lc app=leetcode id=39 lang=python
#
# [39] Combination Sum
#

# @lc code=start
class Solution(object):
    def combinationSum(self, candidates, target):
        """
        :type candidates: List[int]
        :type target: int
        :rtype: List[List[int]]
        """

        candidates.sort()
        result = []
        self.combinationSumHelper(candidates, target, 0, [], result)
        return result

    def combinationSumHelper(self, candidates, target, start, path, result):
        if target == 0:
            result.append(path)
        else:
            for i in range(start, len(candidates)):
                if candidates[i] > target:
                    break
                self.combinationSumHelper(candidates, target - candidates[i], i, path + [candidates[i]], result)

# @lc code=end
