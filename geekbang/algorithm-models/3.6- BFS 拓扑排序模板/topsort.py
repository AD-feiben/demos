# Python
# LeetCode210 课程表II


from collections import deque


class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        # 初始化
        self.n = numCourses
        self.edge = [[] for i in range(numCourses)]
        self.inDeg = [0] * numCourses
        # 加边
        for pre in prerequisites:
            ai, bi = pre[0], pre[1]
            self.addEdge(bi, ai)
        return self.topsort()


    def topsort(self):
        order = []
        q = deque()
        for i in range(self.n):
            if self.inDeg[i] == 0:
                q.append(i)
        while len(q) > 0:
            x = q.popleft()
            order.append(x)
            for y in self.edge[x]:
                self.inDeg[y] -= 1
                if self.inDeg[y] == 0:
                    q.append(y)
        if len(order) == self.n:
            return order
        return []


    def addEdge(self, u, v):
        self.edge[u].append(v)
        self.inDeg[v] += 1
