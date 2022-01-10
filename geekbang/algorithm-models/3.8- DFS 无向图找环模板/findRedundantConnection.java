// Java
// LeetCode684 冗余连接
// 本题有更高效解法，本解法主要练习DFS找环


class Solution {
    public int[] findRedundantConnection(int[][] input) {
        // 出现过的最大的点就是n
        n = 0;
        for (int[] edge : input) {
            int u = edge[0];
            int v = edge[1];
            n = Math.max(u, n);
            n = Math.max(v, n);
        }


        // 模板：出边数组初始化
        // 初态：[[], [], ... []]
        edges = new ArrayList<List<Integer>>();
        // [false, false, ...]
        visit = new boolean[n + 1];
        for (int i = 0; i <= n; i++) {
            edges.add(new ArrayList<Integer>());
            visit[i] = false;
        }
        hasCycle = false;


        // 加边
        for (int[] edge : input) {
            int u = edge[0];
            int v = edge[1];
            // 无向图看作双向边的有向图
            addEdge(u, v);
            addEdge(v, u);


            // 每加一条边，看图中是否多了环c
            for (int i = 0; i <= n; i++) visit[i] = false;
            dfs(u, -1);
            if (hasCycle) return edge;
        }
        return null;
    }


    // 模板：无向图深度优先遍历找环
    // visit数组，避免重复访问
    // fa是第一次走到x的点
    private void dfs(int x, int fa) {
        // 第一步：标记已访问
        visit[x] = true;
        // 第二步：遍历所有出边
        for (Integer y : edges.get(x)) {
            if (y == fa) continue; // 返回父亲，不是环
            if (visit[y]) hasCycle = true;
            else dfs(y, x);
        }
    }


    // 模板：加边
    private void addEdge(int x, int y) {
        edges.get(x).add(y);
    }


    // 出边数组
    int n;
    private List<List<Integer>> edges;
    boolean hasCycle;
    private boolean[] visit;
}
