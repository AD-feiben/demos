function numDistinct(s: string, t: string): number {
  let n = s.length;
  let m = t.length;
  s = ' ' + s;
  t = ' ' + t;

  let f = new Array(n + 1);
  for (let i = 0; i <= n; i++) {
    f[i] = new Array(m + 1).fill(0);
    f[i][0] = 1;
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      f[i][j] = f[i - 1][j];
      if (s.charAt(i) === t.charAt(j) && f[i][j] <= 2147483647 - f[i - 1][j - 1]) {
        f[i][j] += f[i - 1][j - 1];
      }
    }
  }
  return f[n][m];
};