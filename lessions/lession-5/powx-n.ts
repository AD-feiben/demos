function myPow(x: number, n: number): number {
  if (n == 0) return 1;
  if (n < 0) return 1 / myPow(x, -n);
  let y = myPow(x, Math.floor(n / 2));
  return n % 2 === 1 ? y * y * x : y * y;
}
