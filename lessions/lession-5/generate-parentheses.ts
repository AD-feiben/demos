let map: Map<number, string[]> = new Map();

function generateParenthesis(n: number): string[] {
  if (map.has(n)) return map.get(n);
  if (n === 0) return [""];
  if (n === 1) return ["()"];

  let ans = [];
  for (let i = 1; i <= n; i++) {
    let a = generateParenthesis(i - 1);
    let b = generateParenthesis(n - i);
    a.map((itemA) => {
      b.map((itemB) => {
        ans.push(`(${itemA})${itemB}`);
      });
    });
  }
  map.set(n, ans);
  return ans;
}
