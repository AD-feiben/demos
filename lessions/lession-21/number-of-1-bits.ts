function hammingWeight(n: number): number {
  let cnt = 0;
  for (let i = 0; i < 32; i++) {
    if ((n >> i) & 1) cnt++;
  }
  return cnt;
}

function hammingWeight(n: number): number {
  let cnt = 0;
  while (n) {
    cnt++;
    n = n & (n - 1);
  }
  return cnt;
}
