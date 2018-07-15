class Solution:
    def longestPalindrome(self, s):
        """
        :type s: str
        :rtype: str
        """
        pal = ''
        dp = [[0 for _ in range(len(s))] for _ in range(len(s))]
        for j in range(len(s)):
            for i in range(0, j + 1):
                dp[i][j] = ((s[i] == s[j]) and ((j - i <= 2) or dp[i + 1][j - 1]))
                if dp[i][j]:
                    if (j - i + 1) > len(pal):
                        pal = s[i:j + 1]

        return pal


s = Solution()
print(s.longestPalindrome('babad'))
print(s.longestPalindrome('cbbd'))
print(s.longestPalindrome('aaaaa'))
