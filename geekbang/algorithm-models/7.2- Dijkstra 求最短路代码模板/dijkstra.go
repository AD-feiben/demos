// Go
// https://www.acwing.com/problem/content/description/852/

package main

import (
	"fmt"
)

type Pair struct {
	A, B int
}

type PriorityQueue struct {
	Data []Pair
}

func (q *PriorityQueue) Add(p Pair) {
	q.Data = append(q.Data, p)
	cur := len(q.Data) - 1
	for {
		if cur != 0 && q.Data[cur].A < q.Data[(cur-1)/2].A {
			q.Data[cur], q.Data[(cur-1)/2] = q.Data[(cur-1)/2], q.Data[cur]
			cur = (cur - 1) / 2
		} else {
			return
		}
	}
}

func (q *PriorityQueue) Pop() (res Pair) {
	res = q.Data[0]
	q.Data[0] = q.Data[len(q.Data)-1]
	q.Data = q.Data[:len(q.Data)-1]
	cur := 0
	for {
		l, r := cur*2+1, cur*2+2
		if l < len(q.Data) && q.Data[l].A < q.Data[cur].A && (r >= len(q.Data) || q.Data[l].A <= q.Data[r].A) {
			q.Data[cur], q.Data[l] = q.Data[l], q.Data[cur]
			cur = l
		} else if r < len(q.Data) && q.Data[r].A < q.Data[cur].A && (l >= len(q.Data) || q.Data[r].A <= q.Data[l].A) {
			q.Data[cur], q.Data[r] = q.Data[r], q.Data[cur]
			cur = r
		} else {
			return
		}
	}
}

const maxN = 150005

type Edge struct {
	V, W, Nxt int
}

var e = make([]Edge, maxN)
var head = make([]int, maxN)
var cnt = 1

func AddEdge(u, v, w int) {
	e[cnt].V = v
	e[cnt].W = w
	e[cnt].Nxt = head[u]
	head[u] = cnt
	cnt++
}

var n, m int
var dis = make([]int, maxN)
var q = PriorityQueue{Data: make([]Pair, 0)}

func main() {
	for i := range dis {
		dis[i] = -1
	}
	fmt.Scanf("%d %d", &n, &m)
	for ; m > 0; m-- {
		var u, v, w int
		fmt.Scanf("%d %d %d", &u, &v, &w)
		AddEdge(u, v, w)
	}
	dis[1] = 0
	q.Add(Pair{A: 0, B: 1})
	for len(q.Data) > 0 {
		cur := q.Pop()
		if cur.A != dis[cur.B] {
			continue
		} else if cur.B == n {
			break
		}
		for j := head[cur.B]; j != 0; j = e[j].Nxt {
			if dis[e[j].V] == -1 || cur.A+e[j].W < dis[e[j].V] {
				dis[e[j].V] = cur.A + e[j].W
				q.Add(Pair{A: dis[e[j].V], B: e[j].V})
			}
		}
	}
	fmt.Println(dis[n])
}
