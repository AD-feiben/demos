function ladderLength(
  beginWord: string,
  endWord: string,
  wordList: string[]
): number {
  let wordSet = new Set();
  for (let word of wordList) {
    wordSet.add(word);
  }
  if (wordSet.has(endWord) === false) return 0;

  let depth = new Map();
  depth.set(beginWord, 1);

  let q = [];
  q.push(beginWord);

  while (q.length) {
    let s: string = q.shift();
    for (let i = 0; i < s.length; i++) {
      for (let ch = "a".charCodeAt(0); ch <= "z".charCodeAt(0); ch++) {
        if (s.charCodeAt(i) === ch) continue;
        let nsArr = s.split("");
        nsArr[i] = String.fromCharCode(ch);
        let ns = nsArr.join("");

        if (wordSet.has(ns) === false) continue;
        if (depth.has(ns)) continue;
        depth.set(ns, depth.get(s) + 1);
        q.push(ns);
        if (ns === endWord) return depth.get(endWord);
      }
    }
  }
  return 0;
}

/** 双向 BFS */
function ladderLength(
  beginWord: string,
  endWord: string,
  wordList: string[]
): number {
  let wordSet = new Set();
  for (let word of wordList) {
    wordSet.add(word);
  }
  if (wordSet.has(endWord) === false) return 0;

  let depthBegin = new Map(),
    depthEnd = new Map();
  depthBegin.set(beginWord, 1);
  depthEnd.set(endWord, 1);

  let qBegin = [],
    qEnd = [];
  qBegin.push(beginWord);
  qEnd.push(endWord);
  while (qBegin.length || qEnd.length) {
    let res = expand(qBegin, depthBegin, depthEnd);
    if (res !== -1) return res;
    res = expand(qEnd, depthEnd, depthBegin);
    if (res !== -1) return res;
  }

  function expand(q, depth, depthOther) {
    if (q.length <= 0) return -1;
    let s: string = q.shift();
    for (let i = 0; i < s.length; i++) {
      for (let ch = "a".charCodeAt(0); ch <= "z".charCodeAt(0); ch++) {
        if (s.charCodeAt(i) === ch) continue;
        let nsArr = s.split("");
        nsArr[i] = String.fromCharCode(ch);
        let ns = nsArr.join("");

        if (wordSet.has(ns) === false) continue;
        if (depth.has(ns)) continue;
        if (depthOther.has(ns)) return depth.get(s) + depthOther.get(ns);
        depth.set(ns, depth.get(s) + 1);
        q.push(ns);
      }
    }
    return -1;
  }

  return 0;
}
