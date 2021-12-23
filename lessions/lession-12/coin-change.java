class Solution {
    public int coinChange(int[] coins, int amount) {
      int INF = (int) 1e9;
      int[] opt = new int[amount + 1];

      opt[0] = 0;
      for (int i = 1; i <= amount; i++) {
        opt[i] = INF;

        for (int j = 0; j < coins.length; j++) {
          if (i - coins[j] >= 0) {
            opt[i] = Math.min(opt[i], opt[i - coins[j]] + 1);
          }
        }
      }

      if (opt[amount] >= INF) opt[amount] = - 1;
      return opt[amount];
    }
}