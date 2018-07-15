class Solution:
    def convert(self, s, numRows):
        """
        :type s: str
        :type numRows: int
        :rtype: str
        """
        if numRows == 1:
            return s

        matrix = ['' for _ in range(numRows)]
        i = j = 0
        for c in s:
            matrix[j] += c
            if i % (numRows - 1) == 0 and j < numRows - 1:
                j += 1
            else:
                j -= 1
                i += 1

        return ''.join(matrix)


s = Solution()
print(s.convert('PAYPALISHIRING', 3))
print(s.convert('PAYPALISHIRING', 4))
