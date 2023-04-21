#
# @lc app=leetcode id=804 lang=python
#
# [804] Unique Morse Code Words
#

# @lc code=start
class Solution(object):
    def uniqueMorseRepresentations(self, words):
        """
        :type words: List[str]
        :rtype: int
        """

        # 1. Create a dictionary to store the Morse code of each letter
        # 2. Create a set to store the Morse code of each word
        # 3. Return the length of the set

        # 1. Create a dictionary to store the Morse code of each letter
        morse_code = {
            'a': '.-',
            'b': '-...',
            'c': '-.-.',
            'd': '-..',
            'e': '.',
            'f': '..-.',
            'g': '--.',
            'h': '....',
            'i': '..',
            'j': '.---',
            'k': '-.-',
            'l': '.-..',
            'm': '--',
            'n': '-.',
            'o': '---',
            'p': '.--.',
            'q': '--.-',
            'r': '.-.',
            's': '...',
            't': '-',
            'u': '..-',
            'v': '...-',
            'w': '.--',
            'x': '-..-',
            'y': '-.--',
            'z': '--..'
        }

        # 2. Create a set to store the Morse code of each word
        morse_code_words = set()
        for word in words:
            morse_code_word = ''
            for letter in word:
                morse_code_word += morse_code[letter]
            morse_code_words.add(morse_code_word)

        # 3. Return the length of the set
        return len(morse_code_words)

# @lc code=end
