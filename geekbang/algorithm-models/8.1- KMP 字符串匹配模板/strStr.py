# Python
# LeetCode 28 实现strStr
class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        if len(needle) == 0:
            return 0
        n, m = len(haystack), len(needle)
        next = [-1] * m  # 下标从0开始，初值-1；下标从1开始，初值0。
        j = -1
        for i in range(1, m):
            while j >= 0 and needle[j + 1] != needle[i]:
                j = next[j]
            if needle[j + 1] == needle[i]:
                j += 1
            next[i] = j
        j = -1
        for i in range(n):
            while j >= 0 and needle[j + 1] != haystack[i]:
                j = next[j]
            if j + 1 < m and needle[j + 1] == haystack[i]:
                j += 1
            if j + 1 == m:
                return i - m + 1
        return -1
