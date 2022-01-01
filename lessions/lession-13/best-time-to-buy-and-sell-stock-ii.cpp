class Solution {
public:
    int maxProfit(vector<int>& prices) {
      int n = prices.size();
      prices.insert(prices.begin(), 0);
      vector<vector<int>> f(n + 1, vector<int>(2, -1e9));
      f[0][0] = 0;

      for (int i = 1; i <= n; i++) {
        f[i][0] = max(f[i][0], f[i - 1][1] + prices[i]);
        f[i][1] = max(f[i][1], f[i - 1][0] - prices[i]);

        for (int j = 0; j < 2; j++) {
          f[i][j] = max(f[i][j], f[i - 1][j]);
        }
      }

      return f[n][0];
    }
};