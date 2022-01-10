# Python
# LeetCode 1584
class Solution:
    def minCostConnectPoints(self, points: List[List[int]]) -> int:
        # 构造出边
        edges = []
        n = len(points)
        for i in range(n):
            for j in range(i + 1, n):
                edges.append([i, j, abs(points[i][0] - points[j][0]) + abs(points[i][1] - points[j][1])])
        # 按边权排序
        edges.sort(key=lambda e: e[2])
        # Kruskal算法
        self.fa = []
        for i in range(n):
            self.fa.append(i)
        ans = 0
        for e in edges:
            x, y, z = self.find(e[0]), self.find(e[1]), e[2]
            if x != y:
                self.fa[x] = y
                ans += z
        return ans

    def find(self, x):
        if x == self.fa[x]:
            return x
        self.fa[x] = self.find(self.fa[x])
        return self.fa[x]
