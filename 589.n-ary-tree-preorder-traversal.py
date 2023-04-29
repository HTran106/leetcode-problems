#
# @lc app=leetcode id=589 lang=python
#
# [589] N-ary Tree Preorder Traversal
#

# @lc code=start
"""
# Definition for a Node.
class Node(object):
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children
"""

class Solution(object):
    def preorder(self, root):
        """
        :type root: Node
        :rtype: List[int]
        """

        if not root:
            return []

        result = []
        result.append(root.val)
        for child in root.children:
            result.extend(self.preorder(child))

        return result
# @lc code=end
