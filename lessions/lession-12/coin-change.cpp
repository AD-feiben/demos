class Solution {
public:
    int coinChange(vector<int>& coins, int amount) {
      int INF = 1e9;
      vector<int> opt(amount + 1);

      opt[0] = 0;
      for (int i = 1; i <= amount; i++) {
        opt[i] = INF;

        for (int j = 0; j < coins.size(); j++) {
          if (i - coins[j] >= 0) {
            opt[i] = min(opt[i], opt[i - coins[j]] + 1);
          }
        }
      }

      if (opt[amount] >= INF) opt[amount] = -1;
      return opt[amount];
    }
};