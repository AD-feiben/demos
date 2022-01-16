function isIsomorphic(s: string, t: string): boolean {
  let n = s.length;
  let m = new Map();
  let used = new Set();

  for (let i = 0; i < n; i++) {
    let k = s.charAt(i);
    let v = t.charAt(i);

    if (m.has(k) === false) {
      if (used.has(v)) return false;
      m.set(k, v);
      used.add(v);
    }

    if (m.get(k) !== v) return false;
  }
  return true;
}

function isIsomorphic(s: string, t: string): boolean {
  let n = s.length;
  let m1 = new Map();
  let m2 = new Map();

  for (let i = 0; i < n; i++) {
    let sCh = s.charAt(i);
    let tCh = t.charAt(i);
    if (m1.has(sCh) === false && m2.has(tCh) === false) {
      m1.set(sCh, tCh);
      m2.set(tCh, sCh);
    } else {
      if (m1.get(sCh) !== tCh || m2.get(tCh) !== sCh) return false;
    }
  }
  return true;
}
