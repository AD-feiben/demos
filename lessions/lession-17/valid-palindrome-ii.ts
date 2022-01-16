function validPalindrome(s: string): boolean {
  let l = 0,
    r = s.length - 1;
  function dfs(l: number, r: number, times: number) {
    while (l < r) {
      if (s.charAt(l) !== s.charAt(r)) {
        return (
          times > 0 && (dfs(l + 1, r, times - 1) || dfs(l, r - 1, times - 1))
        );
      }
      l++, r--;
    }
    return true;
  }
  return dfs(l, r, 1);
}
