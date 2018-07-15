class Solution:
    def intToRoman(self, num):
        """
        :type num: int
        :rtype: str
        """
        digits = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
        nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]

        ret = ''
        i = 0
        while num > 0 & i < len(nums):
            if num // nums[i] != 0:
                ret += (num // nums[i]) * digits[i]
                num = num % nums[i]

            i += 1

        return ret


s = Solution()
print(s.intToRoman(3))
print(s.intToRoman(4))
print(s.intToRoman(9))
print(s.intToRoman(58))
print(s.intToRoman(1994))
