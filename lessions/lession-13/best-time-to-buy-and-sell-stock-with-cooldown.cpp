class Solution {
public:
    int maxProfit(vector<int>& prices) {
      int n = prices.size();
      prices.insert(prices.begin(), 0);
      // i-天数 j-是否持仓 k-是否处于冷冻期
      vector<vector<vector<int>>> f(2, vector<vector<int>>(2, vector<int>(2, - 1e9)));

      f[0][0][0] = 0;

      for (int i = 1; i <= n; i++) {
        // 买
        f[i & 1][1][0] = max(f[i & 1][1][0], f[i - 1 & 1][0][0] - prices[i]);
        // 卖
        f[i & 1][0][1] = max(f[i & 1][0][1], f[i - 1 & 1][1][0] + prices[i]);

        for (int j = 0; j < 2; j++) {
          for (int k = 0; k < 2; k++) {
            // 不干
            f[i & 1][j][0] = max(f[i & 1][j][0], f[i - 1 & 1][j][k]);
          }
        }
      }

      return max(f[n & 1][0][0], f[n & 1][0][1]);
    }
};