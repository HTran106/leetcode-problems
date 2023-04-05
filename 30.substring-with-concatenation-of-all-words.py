#
# @lc app=leetcode id=30 lang=python
#
# [30] Substring with Concatenation of All Words
#

# @lc code=start
class Solution(object):
    def findSubstring(self, s, words):
        """
        :type s: str
        :type words: List[str]
        :rtype: List[int]
        """

        if len(words) == 0:
            return []

        word_len = len(words[0])
        word_count = len(words)
        word_dict = {}
        for word in words:
            if word in word_dict:
                word_dict[word] += 1
            else:
                word_dict[word] = 1

        result = []
        for i in range(len(s) - word_len * word_count + 1):
            sub_dict = {}
            for j in range(word_count):
                word = s[i + j * word_len:i + (j + 1) * word_len]
                if word in sub_dict:
                    sub_dict[word] += 1
                else:
                    sub_dict[word] = 1
            if sub_dict == word_dict:
                result.append(i)

        return result
# @lc code=end
