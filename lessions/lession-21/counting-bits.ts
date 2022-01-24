function countBits(n: number): number[] {
  let cnt = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    cnt[i] = cnt[i & (i - 1)] + 1;
  }
  return cnt;
};