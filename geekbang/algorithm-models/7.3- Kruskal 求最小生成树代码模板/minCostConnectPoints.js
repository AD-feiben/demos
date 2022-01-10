/* JavaScript */
// LeetCode 1584
/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
    let fa = [];
    for (let i = 0; i < points.length; i++) fa[i] = i;
    var find = function(x) {
        if (x == fa[x]) return x;
        return fa[x] = find(fa[x]);
    }


    // 构造出边
    let edges = [];
    for (let i = 0; i < points.length; i++)
        for (let j = i + 1; j < points.length; j++)
            edges.push([i, j, Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1])]);
    // 按照边权排序
    edges.sort((a, b) => a[2] - b[2]);
    // Kruskal算法
    let ans = 0;
    for (let e of edges) {
        let [x, y, z] = e;
        if (find(x) != find(y)) {
            ans += z;
            fa[find(x)] = find(y);
        }
    }
    return ans;
};
