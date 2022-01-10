package main

//Go
// LeetCode210 课程表II

func topsort(outCome [][]int, inCome []int, numCourses int) {
	queue := make([]int, 0)
	for i := 0; i < numCourses; i++ {
		if inCome[i] == 0 {
			queue = append(queue, i)
		}
	}
	rst := make([]int, 0)
	for len(queue) > 0 {
		node := queue[0]
		queue = queue[1:]
		rst = append(rst, node)
		for _, v := range outCome[node] {
			inCome[v]--
			if inCome[v] == 0 {
				queue = append(queue, v)
			}
		}
	}
	// 如果没有环，则认为是true
	if len(rst) == numCourses {
		return rst
	}

	return nil
}

func findOrder(numCourses int, prerequisites [][]int) []int {
	outCome := make([][]int, numCourses)
	inCome := make([]int, numCourses)

	// 有向图由pre[i][1] -> pre[i][0]
	for i := 0; i < len(prerequisites); i++ {
		outCome[prerequisites[i][1]] = append(outCome[prerequisites[i][1]], prerequisites[i][0])
		inCome[prerequisites[i][0]]++
	}

	return topsort(outCome, inCome, numCourses)
}
