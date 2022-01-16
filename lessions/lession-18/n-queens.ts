function solveNQueens(n: number): string[][] {
  let ans = [];
  let used = new Array(n + 1).fill(false);
  let usedPlus = {};
  let usedMinus = {};
  let temp = [];
  function dfs(i: number) {
    if (i === n + 1) {
      ans.push(temp.slice());
      return;
    }
    for (let j = 1; j <= n; j++) {
      if (used[j] || usedMinus[i - j] || usedPlus[i + j]) continue;
      used[j] = true;
      temp.push(j);
      usedMinus[i - j] = true;
      usedPlus[i + j] = true;
      dfs(i + 1);
      usedPlus[i + j] = false;
      usedMinus[i - j] = false;
      temp.pop();
      used[j] = false;
    }
  }

  dfs(1);

  let result = [];
  ans.map((item) => {
    let temp = [];
    item.map((col, index) => {
      let arr = new Array(n).fill(".");
      arr[col - 1] = "Q";
      temp.push(arr.join(""));
    });
    result.push(temp);
  });

  return result;
}
