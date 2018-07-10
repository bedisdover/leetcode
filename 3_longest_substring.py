class Solution:
    def lengthOfLongestSubstring(self, s):
        """
        :type s: str
        :rtype: int
        """
        max = 0
        list = set()
        for c in s:
            if len(list) > max:
                max = len(list)
            if c in list:
                list.clear()

            list.add(c)

        return max if max > len(list) else len(list)


s = Solution()
string = 'dvdf'
print(s.lengthOfLongestSubstring(string))
