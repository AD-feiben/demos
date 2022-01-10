package main

// Go
// LeetCode 1584
type unionFind struct {
	parent, rank []int
}

func newUnionFind(n int) *unionFind {
	parent := make([]int, n)
	rank := make([]int, n)
	for i := range parent {
		parent[i] = i
		rank[i] = 1
	}
	return &unionFind{parent, rank}
}

func (uf *unionFind) find(x int) int {
	if uf.parent[x] != x {
		uf.parent[x] = uf.find(uf.parent[x])
	}
	return uf.parent[x]
}

func (uf *unionFind) union(x, y int) bool {
	fx, fy := uf.find(x), uf.find(y)
	if fx == fy {
		return false
	}
	if uf.rank[fx] < uf.rank[fy] {
		fx, fy = fy, fx
	}
	uf.rank[fx] += uf.rank[fy]
	uf.parent[fy] = fx
	return true
}

func dist(p, q []int) int {
	return abs(p[0]-q[0]) + abs(p[1]-q[1])
}

func minCostConnectPoints(points [][]int) (ans int) {
	n := len(points)
	type edge struct{ v, w, dis int }
	edges := []edge{}
	for i, p := range points {
		for j := i + 1; j < n; j++ {
			edges = append(edges, edge{i, j, dist(p, points[j])})
		}
	}

	sort.Slice(edges, func(i, j int) bool { return edges[i].dis < edges[j].dis })

	uf := newUnionFind(n)
	left := n - 1
	for _, e := range edges {
		if uf.union(e.v, e.w) {
			ans += e.dis
			left--
			if left == 0 {
				break
			}
		}
	}
	return
}

func abs(x int) int {
	if x < 0 {
		return -x
	}
	return x
}
