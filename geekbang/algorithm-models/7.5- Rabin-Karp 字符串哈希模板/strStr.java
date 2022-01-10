// Java
// LeetCode 28 实现strStr
class Solution {
    public int strStr(String s, String t) {
        if (t.length() == 0) return 0;
        int n = s.length();
        int m = t.length();
        s = " " + s;
        t = " " + t;


        int p = (int)1e9 + 7; // 10^9+7 是一个质数
        long tHash = 0;
        for (int i = 1; i <= m; i++)
            tHash = (tHash * 131 + (t.charAt(i) - 'a' + 1)) % p;
        // 模板：预处理前缀Hash
        long[] sHash = new long[n + 1];
        sHash[0] = 0;
        long[] p131 = new long[n + 1]; // 131的次幂
        p131[0] = 1;
        for (int i = 1; i <= n; i++) {
            sHash[i] = (sHash[i - 1] * 131 + s.charAt(i) - 'a' + 1) % p;
            p131[i] = p131[i - 1] * 131 % p;
        }
        // hello
        // ll
        for (int i = m; i <= n; i++) { // 滑动窗结尾
            // s[i-m+1 ~ i] 与 t[1..m] 是否相等
            if (calcHash(sHash, p131, p, i - m + 1, i) == tHash &&
                s.substring(i - m + 1, i + 1).equals(t.substring(1))) {
                return i - m; // 下标变回0开始
            }
        }
        return -1;
    }


    // 模板：O(1)得到子串[l..r]的Hash值
    private long calcHash(long[] H, long[] p131, int p, int l, int r) {
        // hello 的子串ll的hash值
        //  hell
        // -he00
        // =  ll
        return ((H[r] - H[l - 1] * p131[r - l + 1]) % p + p) % p;
    }
}
