function findRedundantConnection(edges: number[][]): number[] {
  let n = 0;
  for (let edge of edges) {
    let [x, y] = edge;
    n = Math.max(n, x, y);
  }

  let to = new Array(n + 1);
  let visited = new Array(n + 1).fill(false);
  let hasCycle = false;

  for (let edge of edges) {
    let [x, y] = edge;
    if (!to[x]) to[x] = [];
    if (!to[y]) to[y] = [];
    to[x].push(y);
    to[y].push(x);
    dfs(x, 0);
    if (hasCycle) {
      return edge;
    }
  }
  return [];

  function dfs(x, fa) {
    visited[x] = true;
    for (let y of to[x]) {
      if (y === fa) continue;
      if (!visited[y]) dfs(y, x);
      else hasCycle = true;
    }
    visited[x] = false;
  }
}
