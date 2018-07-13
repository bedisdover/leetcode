class Solution:
    def myAtoi(self, str):
        """
        :type str: str
        :rtype: int
        """
        ret = 0
        flag = False
        negative = False
        for c in str:
            if c == '+':
                if flag:
                    break
                else:
                    flag = True
                    continue
            if c == ' ':
                if flag:
                    break
                else:
                    continue
            elif c == '-':
                if flag:
                    break
                else:
                    flag = True
                    negative = True
                    continue
            elif '0' <= c <= '9':
                ret = ret * 10 + (ord(c) - ord('0'))
                flag = True
            else:
                break

        ret = -ret if negative else ret

        if ret > 2**31 - 1:
            return 2**31 - 1
        if ret < -2**31:
            return -2**31
        return ret

s = Solution()
print(s.myAtoi('+-2'))
print(s.myAtoi('    -42'))
print(s.myAtoi('42 width'))
print(s.myAtoi('words and 42'))
print(s.myAtoi('-91283472332'))
