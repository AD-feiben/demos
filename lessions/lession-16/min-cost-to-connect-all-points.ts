function minCostConnectPoints(points: number[][]): number {
  // 建边
  let n = points.length;
  let edges = [];
  for (let i = 0; i < n; i++)
    for (let j = i + 1; j < n; j++) {
      let [xi, yi] = points[i];
      let [xj, yj] = points[j];
      edges.push([i, j, Math.abs(xi - xj) + Math.abs(yi - yj)]);
    }

  edges.sort((a, b) => {
    return a[2] - b[2];
  });

  let fa = new Array(n);
  for (let i = 0; i < n; i++) fa[i] = i;

  function find(x) {
    if (x === fa[x]) return x;
    return (fa[x] = find(fa[x]));
  }

  let ans = 0;
  for (let [x, y, z] of edges) {
    x = find(x);
    y = find(y);
    if (x !== y) {
      ans += z;
      fa[x] = y;
    }
  }
  return ans;
}
