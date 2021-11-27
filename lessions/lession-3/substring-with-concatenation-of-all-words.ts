function findSubstring(s: string, words: string[]): number[] {
  let k = words[0].length;
  let tot = words.length * k;
  let ans = [];

  let wordsMap = new Map();
  for (let word of words) {
    wordsMap.set(word, (wordsMap.get(word) || 0) + 1);
  }

  function isSameMap(a: Map<string, number>, b: Map<string, number>) {
    for (let key of a.keys()) {
      if (a.get(key) !== b.get(key)) return false;
    }
    for (let key of b.keys()) {
      if (b.get(key) !== a.get(key)) return false;
    }
    return true;
  }

  function isValid(str) {
    let splitWordsMap = new Map();
    for (let i = 0; i < str.length; i += k) {
      const subs = str.substr(i, k);
      splitWordsMap.set(subs, (splitWordsMap.get(subs) || 0) + 1);
    }
    return isSameMap(splitWordsMap, wordsMap);
  }

  for (let i = 0; i <= s.length - tot; i++) {
    // 子串
    const subs = s.substr(i, tot);
    // let splitWordsMap = new Map();

    if (isValid(subs)) ans.push(i);
  }

  return ans;
}
