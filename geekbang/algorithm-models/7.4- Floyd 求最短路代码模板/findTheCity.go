package main

// Go
// LeetCode 1334
func findTheCity(n int, edges [][]int, distanceThreshold int) int {
	// 最短路径的状态数组
	var dp [][]int
	// 先初始化
	for i := 0; i < n; i++ {
		var tmp []int
		for j := 0; j < n; j++ {
			if i == j {
				tmp = append(tmp, 0)
			} else {
				tmp = append(tmp, -1)
			}
		}
		dp = append(dp, tmp)
	}
	// 填出边长
	for i := 0; i < len(edges); i++ {
		from := edges[i][0]
		to := edges[i][1]
		weight := edges[i][2]
		// 无向图
		dp[from][to] = weight
		dp[to][from] = weight
	}
	// dp状态转移方程
	// k放在第一层是因为后面的k要依赖前面的值
	for k := 0; k < n; k++ {
		// 从i到j
		for i := 0; i < n; i++ {
			for j := 0; j < n; j++ {
				// 相同的节点不考虑
				if i == j || i == k || j == k {
					continue
				}
				// 不通的路也不考虑
				if dp[i][k] == -1 || dp[k][j] == -1 {
					continue
				}
				tmp := dp[i][k] + dp[k][j]
				if dp[i][j] == -1 || dp[i][j] > tmp {
					dp[i][j] = tmp
					dp[j][i] = tmp
				}
			}
		}
	}
	// 统计小于阈值的路径数
	min := n
	idx := 0
	for i := 0; i < n; i++ {
		cnt := 0
		for j := 0; j < n; j++ {
			if i == j {
				continue
			}
			if dp[i][j] <= distanceThreshold {
				cnt++
			}
		}
		if cnt <= min {
			min = cnt
			idx = i
		}
	}
	return idx
}
