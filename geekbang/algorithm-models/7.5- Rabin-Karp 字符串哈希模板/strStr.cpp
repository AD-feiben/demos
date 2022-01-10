// C/C++
// LeetCode 28 实现strStr
class Solution {
public:
    int strStr(string haystack, string needle) {
        if (needle.empty()) return 0;
        int n = haystack.size();
        int m = needle.size();
        haystack = " " + haystack;
        needle = " " + needle;


        H.push_back(0);
        for (int i = 1; i <= n; i++)
            H.push_back(H[i - 1] * 131 + haystack[i] - 'a' + 1);
        unsigned int val = 0;
        p131.push_back(1);
        for (int i = 1; i <= m; i++) {
            val = val * 131 + needle[i] - 'a' + 1;
            p131.push_back(p131[i - 1] * 131);
        }
        for (int i = m; i <= n; i++) { // 滑动窗结尾
            if (calcHash(i - m + 1, i) == val &&
                haystack.substr(i - m + 1, m) == needle.substr(1, m))
                return i - m; // 下标变回0开始
        }
        return -1;
    }


    // 模板：O(1)得到子串[l..r]的Hash值
    unsigned int calcHash(int l, int r) {
        return H[r] - H[l - 1] * p131[r - l + 1];
    }


private:
    vector<unsigned int> H;
    vector<unsigned int> p131;
};
