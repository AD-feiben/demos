function findTheCity(
  n: number,
  edges: number[][],
  distanceThreshold: number
): number {
  // 邻接矩阵
  let d = [];
  for (let i = 0; i < n; i++) {
    d[i] = new Array(n).fill(1e9);
    d[i][i] = 0;
  }
  for (let edge of edges) {
    let [x, y, z] = edge;
    d[x][y] = d[y][x] = z;
  }

  // Floyd 算法
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        d[i][j] = Math.min(d[i][j], d[i][k] + d[k][j]);
      }
    }
  }

  let minNeighbour = 1e9;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    let neighbour = 0;
    for (let j = 0; j < n; j++) {
      if (i !== j && d[i][j] <= distanceThreshold) neighbour++;
    }
    if (
      neighbour < minNeighbour ||
      (neighbour === minNeighbour && i > ans)
    ) {
      minNeighbour = neighbour;
      ans = i;
    }
  }
  return ans;
}
