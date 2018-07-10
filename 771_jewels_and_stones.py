class Solution:
    def numJewelsInStones(self, J, S):
        """
        :type J: str
        :type S: str
        :rtype: int
        """
        return sum(map(J.count, S))

s = Solution()
J = "aA"
S = "aaaAAA"
print(s.numJewelsInStones(J, S))
