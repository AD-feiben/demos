function generateParenthesis(n: number): string[] {
  let ans = [];
  let temp = [];
  function dfs(i, left, right) {
    if (left > n || right > n || !isValid(temp)) return false;
    if (i === 2 * n) {
      ans.push(temp.join(""));
      return;
    }
    temp.push("(");
    dfs(i + 1, left + 1, right);
    temp.pop();
    temp.push(")");
    dfs(i + 1, left, right + 1);
    temp.pop();
  }

  function isValid(temp: string[]) {
    let left = 0;
    for (let i = 0; i < temp.length; i++) {
      if (temp[i] === "(") {
        left++;
      } else {
        if (left <= 0) return false;
        left--;
      }
    }
    return true;
  }

  dfs(0, 0, 0);
  return ans;
}
