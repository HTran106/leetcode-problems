#
# @lc app=leetcode id=501 lang=python
#
# [501] Find Mode in Binary Search Tree
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def findMode(self, root):
        """
        :type root: TreeNode
        :rtype: List[int]
        """

        # Approach 1: Hash Table
        # Time  complexity: O(n)
        # Space complexity: O(n)
        def dfs(node):
            if node:
                count[node.val] += 1
                dfs(node.left)
                dfs(node.right)
        count = collections.Counter()
        dfs(root)
        max_count = max(count.values())
        return [k for k, v in count.items() if v == max_count]

       

# @lc code=end
