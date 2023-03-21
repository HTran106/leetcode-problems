#
# @lc app=leetcode id=125 lang=python
#
# [125] Valid Palindrome
#

# @lc code=start
class Solution(object):
    def isPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """

        string = ""
        for char in s:
            if char.isalnum():
                string += char.lower()

        return string == string[::-1]
    

# @lc code=end
