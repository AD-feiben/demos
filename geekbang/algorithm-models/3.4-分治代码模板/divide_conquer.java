// Java


private static int divide_conquer(Problem problem, ) {

  if (problem == NULL) {
    int res = process_last_result();
    return res;
  }


  subProblems = split_problem(problem)

  res0 = divide_conquer(subProblems[0])
  res1 = divide_conquer(subProblems[1])

  result = process_result(res0, res1);

  return result;
}
