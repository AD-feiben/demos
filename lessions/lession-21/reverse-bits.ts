function reverseBits(n: number): number {
  let ans = 0;
  for (let i = 0; i < 32; i++) {
    ans = (ans << 1) | (n & 1);
    n >>>= 1; // * >>> 逻辑右移
  }
  return ans >>> 0; // 转为无符号 32 位
}
