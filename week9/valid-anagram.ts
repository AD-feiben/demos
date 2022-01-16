function isAnagram(s: string, t: string): boolean {
  let n = s.length;
  let m = t.length;
  if (n !== m) return false;
  let temp = new Array(26).fill(0);
  for (let i = 0; i < n; i++) {
    temp[s.charCodeAt(i) - "a".charCodeAt(0)]++;
    temp[t.charCodeAt(i) - "a".charCodeAt(0)]--;
  }
  for (let i = 0; i < 26; i++) {
    if (temp[i] !== 0) return false;
  }
  return true;
}
