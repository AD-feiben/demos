function findAnagrams(s: string, p: string): number[] {
  let n = s.length;
  let m = p.length;
  let pMap = new Array(26).fill(0);
  for (let i = 0; i < m; i++) pMap[p.charCodeAt(i) - 'a'.charCodeAt(0)]++;

  let sMap = new Array(26).fill(0);

  // 判断是否为异位词
  function isAnagram() {
    for (let i = 0; i < 26; i++) {
      if (pMap[i] !== sMap[i]) return false;
    }
    return true;
  }

  let ans = []
  let r = 0;
  // 枚举s右端点
  while (r < n) {
    let l = r - m + 1;
    /** 减去窗口外的字符 */
    if (r >= m) {
      sMap[s.charCodeAt(l - 1) - 'a'.charCodeAt(0)]--;
    }

    sMap[s.charCodeAt(r) - 'a'.charCodeAt(0)]++;

    if (l >= 0 && isAnagram()) ans.push(l);
    r++;
  }
  return ans;
};