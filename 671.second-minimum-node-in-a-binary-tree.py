#
# @lc app=leetcode id=671 lang=python
#
# [671] Second Minimum Node In a Binary Tree
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def findSecondMinimumValue(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """

        def dfs(root):
            if not root:
                return
            if root.val > self.min and root.val < self.second_min:
                self.second_min = root.val
            dfs(root.left)
            dfs(root.right)

        self.min = root.val
        self.second_min = float("inf")
        dfs(root)
        return self.second_min if self.second_min != float("inf") else -1

# @lc code=end
