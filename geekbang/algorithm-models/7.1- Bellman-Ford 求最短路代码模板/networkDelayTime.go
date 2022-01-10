package main

// LeetCode 743
func networkDelayTime(times [][]int, n int, k int) int {
	dist := make([]int, n+1)
	for i := 1; i <= n; i++ {
		dist[i] = 1e9
	}
	dist[k] = 0
	for iteration := 1; iteration < n; iteration++ {
		updated := false
		for i := 0; i < len(times); i++ {
			x := times[i][0]
			y := times[i][1]
			z := times[i][2]
			if dist[y] > dist[x]+z {
				dist[y] = dist[x] + z
				updated = true
			}
		}
		if !updated {
			break
		}
	}
	ans := 0
	for i := 1; i <= n; i++ {
		if ans < dist[i] {
			ans = dist[i]
		}
	}
	if ans == 1e9 {
		ans = -1
	}
	return ans
}
