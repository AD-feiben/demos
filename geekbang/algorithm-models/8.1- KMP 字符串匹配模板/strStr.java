// Java
// LeetCode 28 实现strStr
class Solution {
    public int strStr(String haystack, String needle) {
        if (needle.isEmpty()) return 0;
        int n = haystack.length();
        int m = needle.length();
        int[] next = new int[m];
        for (int i = 0; i < m; i++) next[i] = -1; // 下标从0开始，初值-1；下标从1开始，初值0。
        for (int i = 1, j = -1; i < m; i++) {
            while (j >= 0 && needle.charAt(j + 1) != needle.charAt(i)) j = next[j];
            if (needle.charAt(j + 1) == needle.charAt(i)) j++;
            next[i] = j;
        }
        for (int i = 0, j = -1; i < n; i++) {
            while (j >= 0 && needle.charAt(j + 1) != haystack.charAt(i)) j = next[j];
            if (j + 1 < m && needle.charAt(j + 1) == haystack.charAt(i)) j++;
            if (j + 1 == m) return i - m + 1;
        }
        return -1;
    }
}
