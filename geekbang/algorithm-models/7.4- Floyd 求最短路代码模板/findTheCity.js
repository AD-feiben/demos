/* JavaScript */
// LeetCode 1334
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function(n, edges, distanceThreshold) {
    // 邻接矩阵初值：i到i长度为0，没有边长度为INF，其余为输入的边
    let d = [];
    for (let i = 0; i < n; i++) {
        d[i] = [];
        for (let j = 0; j < n; j++) d[i][j] = 1e9;
    }
    for (let edge of edges) {
        let x = edge[0], y = edge[1], z = edge[2];
        d[x][y] = d[y][x] = z;
    }
    for (let i = 0; i < n; i++) d[i][i] = 0;
    // Floyd算法
    for (let k = 0; k < n; k++)
        for (let i = 0; i < n; i++)
            for (let j = 0; j < n; j++)
                d[i][j] = Math.min(d[i][j], d[i][k] + d[k][j]);
    // 统计答案
    let ansCount = n, ans = 0;
    for (let i = 0; i < n; i++) {
        let count = 0;
        for (let j = 0; j < n; j++)
            if (i != j && d[i][j] <= distanceThreshold) count++;
        if (count <= ansCount) {
            ansCount = count;
            ans = i;
        }
    }
    return ans;
}
