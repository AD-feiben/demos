# Python
# LeetCode 743
class Solution:
    def networkDelayTime(self, times: List[List[int]], n: int, k: int) -> int:
        dist = [1e9] * (n + 1)
        dist[k] = 0
        for iteration in range(n - 1):
            updated = False
            for i in range(len(times)):
                x = times[i][0]
                y = times[i][1]
                z = times[i][2]
                if dist[y] > dist[x] + z:
                    dist[y] = dist[x] + z
                    updated = True
            if not updated:
                break
        ans = 0
        for i in range(1, n + 1):
            ans = max(ans, dist[i])
        if ans == 1e9:
            ans = -1
        return ans
