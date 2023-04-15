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

        # Approach 2: Morris Traversal
        # Time  complexity: O(n)
        # Space complexity: O(1)
        # def dfs(node):
        #     if node:
        #         dfs(node.left)
        #         if node.val == cur[0]:
        #             cur[1] += 1
        #         else:
        #             cur[0], cur[1] = node.val, 1
        #         if cur[1] == max_count[0]:
        #             mode.append(cur[0])
        #         elif cur[1] > max_count[0]:
        #             max_count[0], mode[0] = cur[1], cur[0]
        #         dfs(node.right)
        # cur = [None, 0]
        # max_count = [0]
        # mode = []
        # dfs(root)
        # return mode

        # Approach 3: Inorder Traversal
        # Time  complexity: O(n)
        # Space complexity: O(n)
        # def dfs(node):
        #     if node:
        #         dfs(node.left)
        #         if node.val == cur[0]:
        #             cur[1] += 1
        #         else:
        #             cur[0], cur[1] = node.val, 1
        #         if cur[1] == max_count[0]:
        #             mode.append(cur[0])
        #         elif cur[1] > max_count[0]:
        #             max_count[0], mode[0] = cur[1], cur[0]
        #         dfs(node.right)
        # cur = [None, 0]
        # max_count = [0]
        # mode = []
        # dfs(root)
        # return mode

# @lc code=end
