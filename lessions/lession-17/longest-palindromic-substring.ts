function longestPalindrome(s: string): string {
  let n = s.length;
  let ansLen = 0;
  let ansStart = 0;
  // 奇回文串
  for (let center = 0; center < n; center++) {
    let l = center - 1,
      r = center + 1;
    while (l >= 0 && r < n && s.charAt(l) === s.charAt(r)) l--, r++;
    // r-1 ~ l+1
    if (r - l - 1 > ansLen) {
      ansLen = r - l - 1;
      ansStart = l + 1;
    }
  }
  // 偶回文串
  for (let center = 1; center < n; center++) {
    let l = center - 1,
      r = center;
    while (l >= 0 && r < n && s.charAt(l) === s.charAt(r)) l--, r++;
    // r-1 ~ l+1
    if (r - l - 1 > ansLen) {
      ansLen = r - l - 1;
      ansStart = l + 1;
    }
  }

  return s.substr(ansStart, ansLen);
}

/** Rabin-Karp & 二分答案 */
function longestPalindrome(s: string): string {
  let n = s.length;
  let b = 131,
    p = 9999991;
  let preH = new Array(n + 1).fill(0);
  let sufH = new Array(n + 2).fill(0);
  let powB = new Array(n + 1).fill(0);
  powB[0] = 1;

  for (let i = 1; i <= n; i++) {
    preH[i] = (preH[i - 1] * b + s.charCodeAt(i - 1)) % p;
    powB[i] = (powB[i - 1] * b) % p;
  }
  for (let i = n; i >= 1; i--) {
    sufH[i] = (sufH[i + 1] * b + s.charCodeAt(i - 1)) % p;
  }

  function calcHash(l: number, r: number) {
    // l+1 ~ r+1
    return (((preH[r + 1] - preH[l] * powB[r - l + 1]) % p) + p) % p;
  }

  function calcReverseHash(l: number, r: number) {
    // foobar
    // rabo
    // r
    return (((sufH[l + 1] - sufH[r + 2] * powB[r - l + 1]) % p) + p) % p;
  }

  let ansLen = 0;
  let ansStart = 0;
  // 奇回文串
  for (let center = 0; center < n; center++) {
    // 二分求从center往两侧可以拓展多少个字符
    // center-right ~ center+right
    let left = 0,
      right = Math.min(center, n - 1 - center);
    while (left < right) {
      let mid = (right + left + 1) >> 1;
      if (
        calcHash(center - mid, center + mid) ===
        calcReverseHash(center - mid, center + mid)
      ) {
        left = mid;
      } else {
        right = mid - 1;
      }
    }
    if (2 * right + 1 > ansLen) {
      ansLen = 2 * right + 1;
      ansStart = center - right;
    }
  }
  // 偶回文串
  for (let center = 1; center < n; center++) {
    // 二分求从center-1 和 center 之间的空往两侧可以拓展多少个字符
    let left = -1,
      right = Math.min(center - 1, n - 1 - center);
    while (left < right) {
      let mid = (right + left + 1) >> 1;
      if (
        calcHash(center - 1 - mid, center + mid) ===
        calcReverseHash(center - 1 - mid, center + mid)
      ) {
        left = mid;
      } else {
        right = mid - 1;
      }
    }
    // center-1-right ~ center+right
    if (2 * right + 2 > ansLen) {
      ansLen = 2 * right + 2;
      ansStart = center - 1 - right;
    }
  }

  return s.substr(ansStart, ansLen);
}
