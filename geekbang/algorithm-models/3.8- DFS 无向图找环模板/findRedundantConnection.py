# Python
# LeetCode684 冗余连接
# 本题有更高效解法，本解法主要练习DFS找环


class Solution:
    def findRedundantConnection(self, input: List[List[int]]) -> List[int]:
        # 模板：出边数组初始化
        self.edge = [[] for i in range(1001)]  # max n is 1000
        self.hasCycle = False
        for e in input:
            u, v = e[0], e[1]
            self.addEdge(u, v)
            self.addEdge(v, u)
            self.visit = [False] * 1001
            self.dfs(u, -1)
            if self.hasCycle:
                return e
        return []


    # 模板：DFS无向图找环
    def dfs(self, x, fa):
        self.visit[x] = True
        for y in self.edge[x]:
            if y == fa:
                continue
            if self.visit[y]:
                self.hasCycle = True
            else:
                self.dfs(y, x)


    # 模板：加边
    def addEdge(self, u, v):
        self.edge[u].append(v)
