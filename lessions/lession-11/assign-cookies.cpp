class Solution {
public:
    int findContentChildren(vector<int>& g, vector<int>& s) {
      sort(g.begin(), g.end());
      sort(s.begin(), s.end());

      int ans = 0;
      int j = 0;
      for (int child: g) {
        while (j < s.size() && s[j] < child) j++;
        if (j < s.size()) {
          ans++;
          j++;
        }
      }
      return ans;
    }
};