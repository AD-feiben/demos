package main

// Golang
// LeetCode684 冗余连接
// 本题有更高效解法，本解法主要练习DFS找环

func findRedundantConnection(edges [][]int) []int {
	n := 0
	for _, e := range edges {
		if n < e[0] {
			n = e[0]
		}
		if n < e[1] {
			n = e[1]
		}
	}
	// 模板：出边数组初始化
	edge := make([][]int, n+1)
	visit := make([]bool, n+1)
	hasCycle := false

	// 模板：加边
	addEdge := func(u, v int) {
		edge[u] = append(edge[u], v)
	}

	// 模板：DFS无向图找环
	var dfs func(int, int)
	dfs = func(x, fa int) {
		visit[x] = true
		for _, y := range edge[x] {
			if y == fa {
				continue
			}
			if visit[y] {
				hasCycle = true
			} else {
				dfs(y, x)
			}
		}
	}

	for _, e := range edges {
		u, v := e[0], e[1]
		addEdge(u, v)
		addEdge(v, u)
		visit = make([]bool, n+1)
		dfs(u, -1)
		if hasCycle {
			return e
		}
	}
	return nil
}
