function findRedundantConnection(edges: number[][]): number[] {
  let n = edges.length;
  let fa = new Array(n + 1).fill(0);
  for (let i = 0; i <= n; i++) fa[i] = i;

  function find(x) {
    if (fa[x] === x) return x;
    return (fa[x] = find(fa[x]));
  }

  function unionSet(x, y) {
    (x = find(x)), (y = find(y));
    if (x !== y) fa[x] = y;
  }

  for (let [a, b] of edges) {
    if (find(a) === find(b)) {
      return [a, b];
    }
    unionSet(a, b);
  }
}
