#
# @lc app=leetcode id=129 lang=python
#
# [129] Sum Root to Leaf Numbers
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def sumNumbers(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """

        def dfs(node, path):
            if not node:
                return 0
            path = path * 10 + node.val
            if not node.left and not node.right:
                return path
            else:
                return dfs(node.left, path) + dfs(node.right, path)

        return dfs(root, 0)
# @lc code=end
