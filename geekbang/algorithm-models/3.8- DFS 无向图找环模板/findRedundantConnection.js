// JavaScript
// LeetCode684 冗余连接
// 本题有更高效解法，本解法主要练习DFS找环
/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    var n = 0
    for (let e of edges) {
        n = Math.max(n, e[0])
        n = Math.max(n, e[1])
    }
    // 模板：出边数组初始化
    var edge = [];
    for (let i = 0; i <= n; i++) edge[i] = [];
    var visit = [];
    var hasCycle = false;


    // 模板：加边
    var addEdge = function(u, v) {
        edge[u].push(v);
    }


    // 模板：DFS无向图找环
    var dfs = function(x, fa) {
        visit[x] = true;
        for (let y of edge[x]) {
            if (y == fa) continue;
            if (visit[y]) hasCycle = true;
            else dfs(y, x);
        }
    }


    for (let e of edges) {
        let u = e[0];
        let v = e[1];
        addEdge(u, v);
        addEdge(v, u);
        for (let i = 0; i <= n; i++) visit[i] = false;
        dfs(u, -1);
        if (hasCycle) return e;
    }
    return [];
};
