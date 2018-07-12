class Solution:
    def romanToInt(self, s):
        """
        :type s: str
        :rtype: int
        """
        digits = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
        num = [1, 5, 10, 50, 100, 500, 1000]
        ret = 0
        max_rank = 0
        for c in s[::-1]:
            n = digits.index(c)
            if n >= max_rank:
                ret += num[n]
                max_rank = n
            else:
                ret -= num[n]

        return ret

s = Solution()
print(s.romanToInt('III'))
print(s.romanToInt('IV'))
print(s.romanToInt('IX'))
print(s.romanToInt('LVIII'))
print(s.romanToInt('MCMXCIV'))
