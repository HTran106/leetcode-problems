#
# @lc app=leetcode id=160 lang=python
#
# [160] Intersection of Two Linked Lists
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def getIntersectionNode(self, headA, headB):
        """
        :type head1, head1: ListNode
        :rtype: ListNode
        """

        # Approach 1: Brute Force
        # Time  complexity: O(mn)
        # Space complexity: O(1)
        # if not headA or not headB:
        #     return None
        # pA = headA
        # while pA:
        #     pB = headB
        #     while pB:
        #         if pA == pB:
        #             return pA
        #         pB = pB.next
        #     pA = pA.next
        # return None

        # Approach 2: Hash Table
        # Time  complexity: O(m+n)
        # Space complexity: O(m) or O(n)
        # if not headA or not headB:
        #     return None
        # nodes = set()
        # pA = headA
        # while pA:
        #     nodes.add(pA)
        #     pA = pA.next
        # pB = headB
        # while pB:
        #     if pB in nodes:
        #         return pB
        #     pB = pB.next
        # return None

        # Approach 3: Two Pointers
        # Time  complexity: O(m+n)
        # Space complexity: O(1)
        if not headA or not headB:
            return None
        pA = headA
        pB = headB
        while pA != pB:
            pA = pA.next if pA else headB
            pB = pB.next if pB else headA
        return pA
# @lc code=end
