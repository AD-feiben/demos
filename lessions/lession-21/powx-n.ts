function myPow(x: number, n: number): number {
  if (n === 0) return 1;
  if (n < 0) return 1 / myPow(x, -n);

  let temp = x;
  let ans = 1;
  while (n > 0) {
    if (n & 1) ans *= temp;
    temp *= temp;
    n >>>= 1;
  }

  return ans;
}
