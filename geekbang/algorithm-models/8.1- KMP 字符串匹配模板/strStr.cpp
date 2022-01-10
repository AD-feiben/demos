// C/C++
// LeetCode 28 实现strStr
class Solution {
public:
    int strStr(string haystack, string needle) {
        if (needle.empty()) return 0;
        int n = haystack.length();
        int m = needle.length();
        vector<int> next(m, -1); // 下标从0开始，初值-1；下标从1开始，初值0。
        for (int i = 1, j = -1; i < m; i++) {
            while (j >= 0 && needle[j + 1] != needle[i]) j = next[j];
            if (needle[j + 1] == needle[i]) j++;
            next[i] = j;
        }
        for (int i = 0, j = -1; i < n; i++) {
            while (j >= 0 && needle[j + 1] != haystack[i]) j = next[j];
            if (j + 1 < m && needle[j + 1] == haystack[i]) j++;
            if (j + 1 == m) return i - m + 1;
        }
        return -1;
    }
};
