function isMatch(s: string, p: string): boolean {
  let n = s.length;
  let m = p.length;
  s = " " + s;
  p = " " + p;
  let f = new Array(n + 1);
  for (let i = 0; i <= n; i++) {
    f[i] = new Array(m + 1).fill(false);
  }

  f[0][0] = true;
  for (let j = 2; j <= m; j += 2) {
    if (p.charAt(j) === "*") {
      f[0][j] = true;
    } else break;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (p.charAt(j) >= "a" && p.charAt(j) <= "z") {
        f[i][j] = f[i - 1][j - 1] && s.charAt(i) === p.charAt(j);
      } else if (p.charAt(j) === ".") {
        f[i][j] = f[i - 1][j - 1];
      } else {
        // 不配了
        f[i][j] = f[i][j - 2];
        // 继续配
        if (s.charAt(i) === p.charAt(j - 1) || p.charAt(j - 1) === ".") {
          f[i][j] = f[i][j] || f[i - 1][j];
        }
      }
    }
  }
  return f[n][m];
}
