function findCircleNum(isConnected: number[][]): number {
  let n = isConnected.length;
  let fa = new Array(n).fill(0);
  for (let i = 0; i < n; i++) fa[i] = i;

  function find(x: number): number {
    if (fa[x] === x) return x;
    return fa[x] = find(fa[x]);
  }

  function unionSet(x: number, y: number) {
    x = find(x), y = find(y);
    if (x !== y) fa[x] = y;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (isConnected[i][j]) unionSet(i, j);
    }
  }

  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (fa[i] === i) ans++;
  }
  return ans;
};