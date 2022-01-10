//C/C++
// LeetCode210 课程表II


class Solution {
public:
    vector<int> findOrder(int numCourses, vector<vector<int>>& prerequisites) {
        n = numCourses;
        // 出边数组初始化，n个空list
        edges = vector<vector<int>>(n, vector<int>());
        inDeg = vector<int>(n, 0);
        for (vector<int>& pre : prerequisites) {
            int ai = pre[0];
            int bi = pre[1];
            // 加边模板
            addEdge(bi, ai);
        }
        auto ans = topsort();
        if (ans.size() < n) return {}; // 不能完成所有课程
        return ans;
    }


private:
    // 有向图找环 模板（拓扑排序）
    // 返回学的课程数
    vector<int> topsort() {
        vector<int> order;
        // 拓扑排序基于BFS，需要队列
        queue<int> q;
        // 从所有零入度点出发
        for (int i = 0; i < n; i++)
            if (inDeg[i] == 0) q.push(i);
        // 执行BFS
        while (!q.empty()) {
            int x = q.front(); // 取队头（这门课学了）
            q.pop();
            order.push_back(x);
            // 考虑x的所有出边
            for (int y : edges[x]) {
                inDeg[y]--; // 去掉约束关系
                if (inDeg[y] == 0) {
                    q.push(y);
                }
            }
        }
        return order;
    }


    void addEdge(int x, int y) {
        edges[x].push_back(y);
        inDeg[y]++;
    }


    int n;
    vector<vector<int>> edges;
    vector<int> inDeg; // in degree 入度
};
