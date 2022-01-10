// Java
// LeetCode 1334
class Solution {
    public int findTheCity(int n, int[][] edges, int distanceThreshold) {
        // 邻接矩阵初值：i到i长度为0，没有边长度为INF，其余为输入的边
        int[][] d = new int[n][n];
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++)
                d[i][j] = (int)1e9;
        for (int[] edge : edges) {
            int x = edge[0], y = edge[1], z = edge[2];
            d[x][y] = d[y][x] = z;
        }
        for (int i = 0; i < n; i++) d[i][i] = 0;
        // Floyd算法
        for (int k = 0; k < n; k++)
            for (int i = 0; i < n; i++)
                for (int j = 0; j < n; j++)
                    d[i][j] = Math.min(d[i][j], d[i][k] + d[k][j]);
        // 统计答案
        int ansCount = n, ans = 0;
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
}
