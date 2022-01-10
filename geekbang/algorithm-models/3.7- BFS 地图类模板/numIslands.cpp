//C/C++


class Solution {
public:
    int numIslands(vector<vector<char>>& grid) {
        this->m = grid.size();
        this->n = grid[0].size();
        visit = vector<vector<bool>>(m, vector<bool>(n, false));
        int ans = 0;
        for (int i = 0; i < m; i++)
            for (int j = 0; j < n; j++)
                if (grid[i][j] == '1' && !visit[i][j]) {
                    bfs(grid, i, j);
                    ans++;
                }
        return ans;
    }


private:
    // 从(sx,sy)出发bfs
    void bfs(vector<vector<char>>& grid, int sx, int sy) {
        // 长度为2的list或者pair都可以
        queue<pair<int,int>> q;
        // 第一步：push起点
        q.push(make_pair(sx,sy));
        visit[sx][sy] = true;
        while (!q.empty()) {
            int x = q.front().first;
            int y = q.front().second;
            q.pop();
            // 扩展所有出边（四个方向）
            for (int i = 0; i < 4; i++) {
                int nx = x + dx[i];
                int ny = y + dy[i];
                // 任何时候访问数组前，判断合法性
                if (nx < 0 || ny < 0 || nx >= m || ny >= n) continue;
                if (grid[nx][ny] == '1' && !visit[nx][ny]) {
                    q.push(make_pair(nx, ny));
                    // BFS：入队时标记visit
                    visit[nx][ny] = true;
                }
            }
        }
    }


    int m;
    int n;
    vector<vector<bool>> visit;
    const int dx[4] = {-1, 0, 0, 1};
    const int dy[4] = {0, -1, 1, 0};
};
