#
# @lc app=leetcode id=872 lang=python
#
# [872] Leaf-Similar Trees
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def leafSimilar(self, root1, root2):
        """
        :type root1: TreeNode
        :type root2: TreeNode
        :rtype: bool
        """

        # 1. Find the leaf sequence of each tree
        # 2. Compare the leaf sequences of the two trees

        # 1. Find the leaf sequence of each tree
        def find_leaf_sequence(root):
            if root is None:
                return []
            if root.left is None and root.right is None:
                return [root.val]
            return find_leaf_sequence(root.left) + find_leaf_sequence(root.right)

        leaf_sequence_1 = find_leaf_sequence(root1)
        leaf_sequence_2 = find_leaf_sequence(root2)

        # 2. Compare the leaf sequences of the two trees
        return leaf_sequence_1 == leaf_sequence_2


# @lc code=end
