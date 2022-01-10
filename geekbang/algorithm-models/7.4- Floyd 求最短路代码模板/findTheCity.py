# Python
# LeetCode 1334
class Solution:
    def findTheCity(self, n: int, edges: List[List[int]], distanceThreshold: int) -> int:
        # 邻接矩阵初值：i到i长度为0，没有边长度为INF，其余为输入的边
        d = [[1e9] * n for i in range(n)]
        for edge in edges:
            x, y, z = edge[0], edge[1], edge[2]
            d[x][y] = d[y][x] = z
        for i in range(n):
            d[i][i] = 0
        # Floyd算法
        for k in range(n):
            for i in range(n):
                for j in range(n):
                    d[i][j] = min(d[i][j], d[i][k] + d[k][j])
        # 统计答案
        ansCount, ans = n, 0
        for i in range(n):
            count = 0
            for j in range(n):
                if i != j and d[i][j] <= distanceThreshold:
                    count += 1
            if count <= ansCount:
                ansCount = count
                ans = i
        return ans
