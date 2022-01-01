class Solution {
public:
    int jump(vector<int>& nums) {
      int n = nums.size();
      vector<int> f(n, 1e9);
      f[0] = 0;

      for (int i = 0; i < n; i++) {
        for (int j = 0; j <= nums[i]; j++) {
          if (i + j >= n) break;
          f[i + j] = min(f[i + j], f[i] + 1);
        }
      }

      return f[n - 1];
    }
};

// 参考题解
class Solution {
public:
    int jump(vector<int>& nums) {
      int n = nums.size();
      if (n == 1) return 0;
      vector<int> f(n, 1e9);
      f[0] = 0;
      int j = 0;
      for (int i = 1; i < n; i++) {
        while (j + nums[j] < i) j++;
        f[i] = f[j] + 1;
      }

      return f[n - 1];
    }
};