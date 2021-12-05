function combine(n: number, k: number): number[][] {
  let ans = [];
  let temp = [];

  function recur(i: number) {
    if (temp.length > k || temp.length + (n - i + 1) < k) return;
    if (i === n + 1) {
      ans.push(temp.slice());
      return;
    }
    recur(i + 1);
    temp.push(i);
    recur(i + 1);
    temp.pop();
  }

  recur(1);
  return ans;
}
