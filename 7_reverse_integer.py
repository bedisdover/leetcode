class Solution:
    def reverse(self, x):
        """
        :type x: int
        :rtype: int
        """
        ret = 0

        n = abs(x)
        while n > 0:
            ret = ret * 10 + n % 10
            n = n // 10

        if ret > 2**31 - 1 or ret < -2**31:
            return 0

        return ret if x > 0 else -ret

s = Solution()
print(s.reverse(123))
print(s.reverse(-123))
print(s.reverse(1534236469))
