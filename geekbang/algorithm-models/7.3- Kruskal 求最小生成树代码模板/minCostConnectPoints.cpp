// C/C++
// LeetCode 1584
class Solution {
public:
    int minCostConnectPoints(vector<vector<int>>& points) {
        // 构造出边
        vector<vector<int>> edges;
        for (int i = 0; i < points.size(); i++)
            for (int j = i + 1; j < points.size(); j++)
                edges.push_back({i, j, abs(points[i][0] - points[j][0]) + abs(points[i][1] - points[j][1])});
        // 按照边权排序
        sort(edges.begin(), edges.end(),
             [](const vector<int>& a, const vector<int>&b) {
                 return a[2] < b[2];
             });
        // Kruskal算法
        for (int i = 0; i < points.size(); i++) fa.push_back(i);
        int ans = 0;
        for (int i = 0; i < edges.size(); i++) {
            int x = edges[i][0];
            int y = edges[i][1];
            int z = edges[i][2];
            if (find(x) != find(y)) {
                ans += z;
                fa[find(x)] = find(y);
            }
        }
        return ans;
    }


private:
    vector<int> fa;
    int find(int x) {
        if (x == fa[x]) return x;
        return fa[x] = find(fa[x]);
    }
};
