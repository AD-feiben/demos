package main

func divide_conquer(Problem *problem) int {
	if problem == nil {
		res := process_last_result()
		return res
	}

	subProblems := split_problems(problem)

	res0 := divide_conquer(subProblems[0])
	res1 := divide_conquer(subProblems[1])

	result := process_result(res0, res1)

	return result
}
