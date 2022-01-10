package main

//Golang

func numIslands(grid [][]byte) int {
	m := len(grid)
	n := len(grid[0])
	visit := make([][]bool, 0)
	for i := 0; i < m; i++ {
		visit = append(visit, make([]bool, n))
	}
	dx := []int{-1, 0, 0, 1}
	dy := []int{0, -1, 1, 0}
	var bfs func(int, int)

	bfs = func(sx int, sy int) {
		q := make([][]int, 0)
		// 第一步：push起点
		q = append(q, []int{sx, sy})
		for len(q) > 0 {
			now := q[0]
			q = q[1:]
			x, y := now[0], now[1]
			// 扩展所有出边（四个方向）
			for i := 0; i < 4; i++ {
				nx := x + dx[i]
				ny := y + dy[i]
				// 任何时候访问数组前，判断合法性
				if nx < 0 || ny < 0 || nx >= m || ny >= n {
					continue
				}
				if grid[nx][ny] == '1' && !visit[nx][ny] {
					q = append(q, []int{nx, ny})
					// BFS：入队时标记visit
					visit[nx][ny] = true
				}
			}
		}
	}

	ans := 0
	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			if grid[i][j] == '1' && !visit[i][j] {
				bfs(i, j)
				ans++
			}
		}
	}

	return ans
}
