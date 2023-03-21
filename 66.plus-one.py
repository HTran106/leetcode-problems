#
# @lc app=leetcode id=66 lang=python
#
# [66] Plus One
#

# @lc code=start
class Solution(object):
    def plusOne(self, digits):
        """
        :type digits: List[int]
        :rtype: List[int]
        """

        # 1. Create a variable to store the carry
        # 2. Create a variable to store the length of the digits list
        # 3. Loop through the digits list in reverse
        # 4. If the carry is 1, add 1 to the current digit
        # 5. If the current digit is 10, set the carry to 1 and set the current digit to 0
        # 6. Else, set the carry to 0
        # 7. If the carry is 1, add 1 to the beginning of the digits list
        # 8. Return the digits list

        carry = 1
        length = len(digits)

        for i in range(length - 1, -1, -1):
            if carry == 1:
                digits[i] += 1

            if digits[i] == 10:
                carry = 1
                digits[i] = 0
            else:
                carry = 0

        if carry == 1:
            digits.insert(0, 1)

        return digits

# @lc code=end
