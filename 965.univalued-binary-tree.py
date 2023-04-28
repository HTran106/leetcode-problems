#
# @lc app=leetcode id=965 lang=python
#
# [965] Univalued Binary Tree
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def isUnivalTree(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        """

        # 1. In-order traversal
        # 2. Check if all values are the same

        # 1. In-order traversal
        def in_order_traversal(root):
            if root is None:
                return []
            return in_order_traversal(root.left) + [root.val] + in_order_traversal(root.right)

        # 2. Check if all values are the same
        array = in_order_traversal(root)
        return len(set(array)) == 1

# @lc code=end
