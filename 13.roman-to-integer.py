#
# @lc app=leetcode id=13 lang=python
#
# [13] Roman to Integer
#

# @lc code=start
class Solution(object):
    def romanToInt(self, s):
        """
        :type s: str
        :rtype: int
        """
        # 1. Create a dictionary to store the roman numerals
        # 2. Create a variable to store the total
        # 3. Loop through the string
        # 4. If the current character is less than the next character, subtract the current character from the total
        # 5. Else, add the current character to the total
        # 6. Return the total

        # 1. Create a dictionary to store the roman numerals
        roman_numerals = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000
        }

        # 2. Create a variable to store the total
        total = 0

        # 3. Loop through the string
        for i in range(len(s)):
            # 4. If the current character is less than the next character, subtract the current character from the total
            if i < len(s) - 1 and roman_numerals[s[i]] < roman_numerals[s[i + 1]]:
                total -= roman_numerals[s[i]]
            # 5. Else, add the current character to the total
            else:
                total += roman_numerals[s[i]]

        # 6. Return the total
        return total

# @lc code=end
