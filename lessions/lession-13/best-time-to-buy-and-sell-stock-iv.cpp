class Solution {
public:
    int maxProfit(int c, vector<int>& prices) {
      int n = prices.size();
      prices.insert(prices.begin(), 0);

      // i-天数 j-是否持仓 k-交易笔数
      vector<vector<vector<int>>> f(2, vector<vector<int>>(2, vector<int>(c + 1, -1e9)));
      f[0][0][0] = 0;


      for (int i = 1; i <= n; i++)
        for (int j = 0; j < 2; j++)
          for (int k = 0; k <= c; k++) {
            if (k > 0) f[i & 1][1][k] = max(f[i & 1][1][k], f[i - 1 & 1][0][k - 1] - prices[i]);
            f[i & 1][0][k] = max(f[i & 1][0][k], f[i - 1 & 1][1][k] + prices[i]);
            f[i & 1][j][k] = max(f[i & 1][j][k], f[i - 1 & 1][j][k]);
          }

      int ans = -1e9;
      for (int k = 0; k <= c; k++)
        ans = max(ans, f[n & 1][0][k]);

      return ans;
    }
};