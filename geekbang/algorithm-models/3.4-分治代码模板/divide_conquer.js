//Javascript
const divide_conquer = (problem, params) => {


  // recursion terminator


  if (problem == null) {


    process_result


    return


  }


  // process current problem


  subproblems = split_problem(problem, data)


  subresult1 = divide_conquer(subproblem[0], p1)


  subresult2 = divide_conquer(subproblem[1], p1)


  subresult3 = divide_conquer(subproblem[2], p1)


  ...


  // merge


  result = process_result(subresult1, subresult2, subresult3)


  // revert the current level status


}
