#
# @lc app=leetcode id=897 lang=python
#
# [897] Increasing Order Search Tree
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def increasingBST(self, root):
        """
        :type root: TreeNode
        :rtype: TreeNode
        """

        # 1. In-order traversal
        # 2. Reconstruct the tree

        # 1. In-order traversal
        def in_order_traversal(root):
            if root is None:
                return []
            return in_order_traversal(root.left) + [root.val] + in_order_traversal(root.right)

        # 2. Reconstruct the tree
        def reconstruct_tree(array):
            if len(array) == 0:
                return None
            root = TreeNode(array[0])
            root.right = reconstruct_tree(array[1:])
            return root

        array = in_order_traversal(root)
        return reconstruct_tree(array)

# @lc code=end
