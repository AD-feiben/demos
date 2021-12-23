class Solution {
public:
    bool lemonadeChange(vector<int>& bills) {
      coins[5] = 0, coins[10] = 0, coins[20] = 0;
      for (int bill: bills) {
        coins[bill]++;
        if (!exchange(bill - 5)) return false;
      }
      return true;
    }
private:
  bool exchange(int amount) {
    for (int x: { 20, 10, 5 }) {
      while(amount >= x && coins[x] > 0) {
        coins[x]--;
        amount -= x;
      }
    }
    return amount == 0;
  }

  unordered_map<int, int> coins;
};