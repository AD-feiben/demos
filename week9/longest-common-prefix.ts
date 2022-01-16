function longestCommonPrefix(strs: string[]): string {
  let ans = strs[0];
  let n = strs.length;
  for (let i = 1; i < n; i++) {
    ans = getLongestCommonPrefix(ans, strs[i]);
    if (ans === '') return ans;
  }
  return ans;
};

function getLongestCommonPrefix(str1: string, str2: string): string {
  let ans = '';
  let index = 0;
  let minLen = Math.min(str1.length, str2.length);
  while (index < minLen) {
    if (str1.charAt(index) === str2.charAt(index)) {
      ans += str1.charAt(index);
      index++;
    } else break;
  }
  return ans;
}