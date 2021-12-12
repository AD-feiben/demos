function letterCombinations(digits: string): string[] {
  let ans = [];
  let digitMap = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  let temp = "";
  function dfs(index: number) {
    if (temp.length === digits.length) {
      ans.push(temp);
      return;
    }

    let digit = digits.charAt(index);
    for (let char of digitMap[digit]) {
      let tempCopy = temp;
      temp += char;
      dfs(index + 1);
      temp = tempCopy;
    }
  }

  if (digits.length === 0) return ans;
  dfs(0);
  return ans;
}
