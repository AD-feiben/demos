function numJewelsInStones(jewels: string, stones: string): number {
  let jewelsSet = new Set();
  for (let jewel of jewels) {
    jewelsSet.add(jewel)
  }
  let ans = 0;
  for (let stone of stones) {
    ans += +jewelsSet.has(stone);
  }
  return ans;
};