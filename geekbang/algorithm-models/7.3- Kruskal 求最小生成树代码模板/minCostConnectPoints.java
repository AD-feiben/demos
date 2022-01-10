// Java
// LeetCode 1584
class Solution {
    public int minCostConnectPoints(int[][] points) {
        // 构造出边
        List<int[]> edges = new ArrayList<>();
        for (int i = 0; i < points.length; i++)
            for (int j = i + 1; j < points.length; j++)
                edges.add(new int[]{i, j, Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1])});
        // 按照边权排序
        edges.sort((a, b) -> { return a[2] - b[2]; });
        // Kruskal算法
        fa = new int[points.length];
        for (int i = 0; i < points.length; i++) fa[i] = i;
        int ans = 0;
        for (int i = 0; i < edges.size(); i++) {
            int x = edges.get(i)[0];
            int y = edges.get(i)[1];
            int z = edges.get(i)[2];
            if (find(x) != find(y)) {
                ans += z;
                fa[find(x)] = find(y);
            }
        }
        return ans;
    }


    int[] fa;
    int find(int x) {
        if (x == fa[x]) return x;
        return fa[x] = find(fa[x]);
    }
}
