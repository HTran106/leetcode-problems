#
# @lc app=leetcode id=14 lang=python
#
# [14] Longest Common Prefix
#

# @lc code=start
class Solution(object):
    def longestCommonPrefix(self, strs):
        """
        :type strs: List[str]
        :rtype: str
        """
        # 1. Create a variable to store the longest common prefix
        # 2. Loop through the first string
        # 3. Create a variable to store the current character
        # 4. Loop through the rest of the strings
        # 5. If the current character is not the same as the current character in the current string, return the longest common prefix
        # 6. Else, continue looping through the rest of the strings
        # 7. If the current character is the same as the current character in the current string, continue looping through the rest of the strings
        # 8. If the current character is the same as the current character in the current string, continue looping through the rest of the strings
        # 9. Return the longest common prefix

        # 1. Create a variable to store the longest common prefix
        longest_common_prefix = ""

        # 2. Loop through the first string
        for i in range(len(strs[0])):
            # 3. Create a variable to store the current character
            current_character = strs[0][i]

            # 4. Loop through the rest of the strings
            for j in range(1, len(strs)):
                # 5. If the current character is not the same as the current character in the current string, return the longest common prefix
                if i == len(strs[j]) or current_character != strs[j][i]:
                    return longest_common_prefix

            # 6. Else, continue looping through the rest of the strings
            # 7. If the current character is the same as the current character in the current string, continue looping through the rest of the strings
            # 8. If the current character is the same as the current character in the current string, continue looping through the rest of the strings
            # 9. Return the longest common prefix
            longest_common_prefix += current_character

        return longest_common_prefix

# @lc code=end
