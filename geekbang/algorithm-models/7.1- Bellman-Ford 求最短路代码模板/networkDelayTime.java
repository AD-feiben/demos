// Java
// LeetCode 743
class Solution {
    public int networkDelayTime(int[][] times, int n, int k) {
        int[] dist = new int[n + 1];
        for (int i = 1; i <= n; i++) dist[i] = (int)1e9;
        dist[k] = 0;
        for (int iteration = 1; iteration < n; iteration++) {
            boolean updated = false;
            for (int i = 0; i < times.length; i++) {
                int x = times[i][0];
                int y = times[i][1];
                int z = times[i][2];
                if (dist[y] > dist[x] + z) {
                    dist[y] = dist[x] + z;
                    updated = true;
                }
            }
            if (!updated) break;
        }
        int ans = 0;
        for (int i = 1; i <= n; i++)
            ans = Math.max(ans, dist[i]);
        if (ans == 1e9) ans = -1;
        return ans;
    }
}
