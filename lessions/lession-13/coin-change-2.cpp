class Solution {
public:
    int change(int amount, vector<int>& coins) {
      int n = coins.size();
      coins.insert(coins.begin(), 0);
      vector<int> f(amount + 1, 0);

      f[0] = 1;
      for (int i = 1; i <= n; i++)
        for (int j = coins[i]; j <= amount; j++) {
          f[j] += f[j - coins[i]];
        }

      return f[amount];
    }
};