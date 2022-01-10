/* JavaScript */
// LeetCode 743
/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    dist = []
    for (let i = 1; i <= n; i++) dist[i] = 1e9;
    dist[k] = 0;
    for (let iteration = 1; iteration < n; iteration++) {
        let updated = false;
        for (let i = 0; i < times.length; i++) {
            let x = times[i][0];
            let y = times[i][1];
            let z = times[i][2];
            if (dist[y] > dist[x] + z) {
                dist[y] = dist[x] + z;
                updated = true;
            }
        }
        if (!updated) break;
    }
    let ans = 0;
    for (let i = 1; i <= n; i++)
        ans = Math.max(ans, dist[i]);
    if (ans == 1e9) ans = -1;
    return ans;
};
