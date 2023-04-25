#
# @lc app=leetcode id=929 lang=python
#
# [929] Unique Email Addresses
#

# @lc code=start
class Solution(object):
    def numUniqueEmails(self, emails):
        """
        :type emails: List[str]
        :rtype: int
        """

        # 1. Create a set to store the unique email addresses
        # 2. Iterate through the emails and add them to the set

        # 1. Create a set to store the unique email addresses
        unique_emails = set()

        # 2. Iterate through the emails and add them to the set
        for email in emails:
            local, domain = email.split('@')
            local = local.split('+')[0]
            local = local.replace('.', '')
            unique_emails.add(local + '@' + domain)

        return len(unique_emails)

# @lc code=end
