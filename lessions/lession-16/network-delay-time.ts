/** Bellman-Ford */
function networkDelayTime(times: number[][], n: number, k: number): number {
  let dist = new Array(n + 1).fill(1e9);
  dist[k] = 0;

  for (let round = 0; round <= n - 1; round++) {
    let flag = false;
    for (let [x, y, z] of times) {
      if (dist[y] > dist[x] + z) {
        dist[y] = dist[x] + z;
        flag = true;
      }
    }
    if (!flag) break;
  }

  let ans = 0;
  for (let i = 1; i <= n; i++) ans = Math.max(ans, dist[i]);
  return ans === 1e9 ? -1 : ans;
}

/** dijkstra */
function networkDelayTime(times: number[][], n: number, k: number): number {
  // 建图
  let ver = [];
  let edge = [];
  let expand = new Array(n + 1).fill(false);

  for (let i = 0; i <= n; i++) {
    ver[i] = [];
    edge[i] = [];
  }

  for (let [x, y, z] of times) {
    ver[x].push(y);
    edge[x].push(z);
  }

  let dist = new Array(n + 1).fill(1e9);
  dist[k] = 0;

  for (let round = 0; round <= n; round++) {
    let temp = 1e9,
      x = 0;
    for (let i = 0; i <= n; i++) {
      if (!expand[i] && dist[i] < temp) {
        temp = dist[i];
        x = i;
      }
    }

    expand[x] = true;
    for (let i = 0; i < ver[x].length; i++) {
      let y = ver[x][i];
      let z = edge[x][i];
      if (dist[y] > dist[x] + z) {
        dist[y] = dist[x] + z;
      }
    }
  }

  let ans = 0;
  for (let i = 1; i <= n; i++) ans = Math.max(ans, dist[i]);
  return ans === 1e9 ? -1 : ans;
}
