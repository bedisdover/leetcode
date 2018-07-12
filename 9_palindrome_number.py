class Solution:
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        if x < 0 or (x % 10 == 0 and x != 0):
            return False

        reverse = 0
        while x > reverse:
            reverse = reverse * 10 + x % 10
            x = x // 10

        return x == reverse or x == reverse // 10


s = Solution()
print(s.isPalindrome(121))
print(s.isPalindrome(1221))
print(s.isPalindrome(-121))
print(s.isPalindrome(10))