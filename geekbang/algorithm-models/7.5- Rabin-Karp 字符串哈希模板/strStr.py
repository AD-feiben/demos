# Python
# LeetCode 28 实现strStr
class Solution:
    def strStr(self, s: str, t: str) -> int:
        if len(t) == 0:
            return 0
        n, m = len(s), len(t)
        s = " " + s
        t = " " + t


        p = int(1e9 + 7)
        tHash = 0
        for i in range(1, m + 1):
            tHash = (tHash * 13331 + ord(t[i])) % p
        # 模板：预处理前缀Hash
        sHash = [0] * (n + 1)
        p13331 = [1] + [0] * n
        for i in range(1, n + 1):
            sHash[i] = (sHash[i - 1] * 13331 + ord(s[i])) % p
            p13331[i] = p13331[i - 1] * 13331 % p


        # 模板：O(1)得到子串[l..r]的Hash值
        # hello 的子串ll的hash值
        #  hell
        # -he00
        # =  ll
        calcHash = lambda l, r: ((sHash[r] - sHash[l - 1] * p13331[r - l + 1]) % p + p) % p

        for i in range(m, n + 1): # 滑动窗结尾
            print(calcHash(i - m + 1, i))
            # s[i-m+1 ~ i] 与 t[1..m] 是否相等
            if calcHash(i - m + 1, i) == tHash and s[i - m + 1 : i + 1] == t[1:]:
                return i - m; # 下标变回0开始
        return -1
