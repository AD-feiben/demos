function firstUniqChar(s: string): number {
  let n = s.length;
  let char2Index = new Map();
  for (let i = 0; i < n; i++) {
    let ch = s.charAt(i)
    let index = char2Index.has(ch) ? n : i;
    char2Index.set(ch, index);
  }
  let ans = Math.min(...char2Index.values());
  return ans === n ? -1 : ans;
};