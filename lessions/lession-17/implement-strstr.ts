function strStr(haystack: string, needle: string): number {
  // ! 9999991 是一个质数，JavaScript整数没有long，模数不能开太大
  let b = 131, p = 9999991;
  let n = haystack.length, m = needle.length;
  let H = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    H[i] = (H[i - 1] * b + haystack.charCodeAt(i - 1)) % p;
  }

  let Hneedle = 0;
  let powBM = 1;
  for (let i = 0; i < m; i++) {
    Hneedle = (Hneedle * b + needle.charCodeAt(i)) % p;
    powBM = powBM * b % p;
  }

  for (let l = 1; l <= n - m + 1; l++) {
    let r = l + m - 1;
    if (((H[r] - H[l - 1] * powBM) % p + p) % p === Hneedle) {
      return l - 1;
    }
  }
  return -1;
};