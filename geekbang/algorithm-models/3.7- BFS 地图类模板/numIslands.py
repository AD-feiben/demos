# Python


from collections import deque


class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        self.m = len(grid)
        self.n = len(grid[0])
        self.visit = [[False] * self.n for i in range(self.m)]
        ans = 0
        for i in range(self.m):
            for j in range(self.n):
                if grid[i][j] == '1' and not self.visit[i][j]:
                    self.bfs(grid, i, j)
                    ans += 1
        return ans


    def bfs(self, grid, sx, sy):
        dx = [-1, 0, 0, 1]
        dy = [0, -1, 1, 0]
        q = deque()
        # 第一步：push起点
        q.append([sx, sy])
        self.visit[sx][sy] = True
        while len(q) > 0:
            now = q.popleft()
            x, y = now[0], now[1]
            # 扩展所有出边（四个方向）
            for i in range(4):
                nx = x + dx[i]
                ny = y + dy[i]
                # 任何时候访问数组前，判断合法性
                if nx < 0 or ny < 0 or nx >= self.m or ny >= self.n:
                    continue
                if grid[nx][ny] == '1' and not self.visit[nx][ny]:
                    q.append([nx, ny])
                    # BFS：入队时标记visit
                    self.visit[nx][ny] = True
