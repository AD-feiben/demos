//C/C++
// LeetCode684 冗余连接
// 本题有更高效解法，本解法主要练习DFS找环


class Solution {
public:
    vector<int> findRedundantConnection(vector<vector<int>>& edges) {
        for (vector<int>& e : edges) {
            int u = e[0], v = e[1];
            n = max(n, u);
            n = max(n, v);
        }
        // 模板：出边数组初始化
        edge = vector<vector<int>>(n + 1, vector<int>());
        visit = vector<bool>(n + 1, false);
        hasCycle = false;
        for (vector<int>& e : edges) {
            int u = e[0], v = e[1];
            addEdge(u, v);
            addEdge(v, u);
            dfs(u, 0);
            if (hasCycle) return e;
        }
        return {};
    }


private:
    // 模板：DFS无向图找环
    void dfs(int x, int fa) {
        visit[x] = true;
        for (int y : edge[x]) {
            if (y == fa) continue;
            if (!visit[y]) dfs(y, x);
            else hasCycle = true;
        }
        visit[x] = false;
    }


    // 模板：加边
    void addEdge(int x, int y) {
        edge[x].push_back(y);
    }


    int n;
    vector<vector<int>> edge;
    vector<bool> visit;
    bool hasCycle;
};
