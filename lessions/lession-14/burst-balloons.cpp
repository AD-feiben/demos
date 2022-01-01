class Solution {
public:
    int maxCoins(vector<int>& nums) {
      int n = nums.size();
      nums.insert(nums.begin(), 1);
      nums.push_back(1);
      vector<vector<int>> f(n + 2, vector<int>(n + 2, 0));

      for (int len = 1; len <= n; len++)
        for (int l = 1; l <= n - len + 1; l++) {
          int r = l + len - 1;
          for (int p = l; p <= r; p++) {
            f[l][r] = max(f[l][r], f[l][p - 1] + f[p + 1][r] + nums[p] * nums[l - 1] * nums[r + 1]);
          }
        }

      return f[1][n];
    }
};

class Solution {
public:
    int maxCoins(vector<int>& nums) {
        int n = nums.size();
        nums.insert(nums.begin(), 1);
        nums.push_back(1);
        vector<vector<int>> f(n + 1, vector<int>(n + 1, -1));
        return calc(nums, f, 1, n);
    }

    int calc(vector<int>& nums, vector<vector<int>>& f, int l, int r) {
      if (l > r) return 0;
      if (f[l][r] != -1) return f[l][r];
      for (int p = l; p <= r; p++) {
        f[l][r] = max(f[l][r], calc(nums, f, l, p - 1) + calc(nums, f, p + 1, r) + nums[p] * nums[l - 1] * nums[r + 1]);
      }
      return f[l][r];
    }
};
