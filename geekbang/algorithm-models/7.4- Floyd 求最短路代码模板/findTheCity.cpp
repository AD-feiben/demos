// C/C++
// LeetCode 1334
class Solution {
public:
    int findTheCity(int n, vector<vector<int>>& edges, int distanceThreshold) {
        // 邻接矩阵初值：i到i长度为0，没有边长度为INF，其余为输入的边
        vector<vector<int>> d(n, vector<int>(n, 1e9));
        for (auto& edge : edges) {
            int x = edge[0], y = edge[1], z = edge[2];
            d[x][y] = d[y][x] = z;
        }
        for (int i = 0; i < n; i++) d[i][i] = 0;
        // Floyd算法
        for (int k = 0; k < n; k++)
            for (int i = 0; i < n; i++)
                for (int j = 0; j < n; j++)
                    d[i][j] = min(d[i][j], d[i][k] + d[k][j]);
        // 统计答案
        int ansCount = n, ans;
        for (int i = 0; i < n; i++) {
            int count = 0;
            for (int j = 0; j < n; j++)
                if (i != j && d[i][j] <= distanceThreshold) count++;
            if (count <= ansCount) {
                ansCount = count;
                ans = i;
            }
        }
        return ans;
    }
};
