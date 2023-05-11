#
# @lc app=leetcode id=1185 lang=python
#
# [1185] Day of the Week
#

# @lc code=start
class Solution(object):
    def dayOfTheWeek(self, day, month, year):
        """
        :type day: int
        :type month: int
        :type year: int
        :rtype: str
        """

        # 1971-1-1 is Friday
        days = ["Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"]
        daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31]
        totalDays = 0
        for i in range(1971, year):
            if self.isLeapYear(i):
                totalDays += 366
            else:
                totalDays += 365

        for i in range(1, month):
            totalDays += daysInMonth[i - 1]
            if i == 2 and self.isLeapYear(year):
                totalDays += 1

        totalDays += day - 1

        return days[totalDays % 7]

# @lc code=end
