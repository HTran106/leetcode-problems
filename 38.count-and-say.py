#
# @lc app=leetcode id=38 lang=python
#
# [38] Count and Say
#

# @lc code=start
class Solution(object):
    def countAndSay(self, n):
        """
        :type n: int
        :rtype: str
        """

        # 1. Create a variable to store the current string
        # 2. Create a variable to store the next string
        # 3. Loop through the range of n
        # 4. Loop through the current string
        # 5. If the current character is the same as the next character, increment the count
        # 6. Else, add the count and the character to the next string
        # 7. Set the current string to the next string
        # 8. Return the current string

        # 1. Create a variable to store the current string
        current_string = "1"

        # 3. Loop through the range of n
        for i in range(n - 1):
            # 2. Create a variable to store the next string
            next_string = ""
            # 4. Loop through the current string
            for j in range(len(current_string)):
                # 5. If the current character is the same as the next character, increment the count
                count = 1
                while j < len(current_string) - 1 and current_string[j] == current_string[j + 1]:
                    count += 1
                    j += 1
                # 6. Else, add the count and the character to the next string
                next_string += str(count) + current_string[j]
            # 7. Set the current string to the next string
            current_string = next_string

        # 8. Return the current string
        return current_string


# @lc code=end
