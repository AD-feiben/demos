// C/C++
// LeetCode 743
class Solution {
public:
    int networkDelayTime(vector<vector<int>>& times, int n, int k) {
        vector<int> dist(n + 1, 1e9);
        dist[k] = 0;
        for (int iteration = 1; iteration < n; iteration++) {
            bool updated = false;
            for (int i = 0; i < times.size(); i++) {
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
            ans = max(ans, dist[i]);
        if (ans == 1e9) ans = -1;
        return ans;
    }
};
