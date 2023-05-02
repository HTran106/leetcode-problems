#
# @lc app=leetcode id=606 lang=python
#
# [606] Construct String from Binary Tree
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def tree2str(self, root):
        """
        :type root: TreeNode
        :rtype: str
        """

        if not root:
            return ""

        result = str(root.val)
        if root.left or root.right:
            result += "(" + self.tree2str(root.left) + ")"
        if root.right:
            result += "(" + self.tree2str(root.right) + ")"

        return result

# @lc code=end
