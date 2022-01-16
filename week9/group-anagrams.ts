function groupAnagrams(strs: string[]): string[][] {
  let map: Map<string, string[]> = new Map();
  for (let str of strs) {
    let hash = str.split("").sort().join("");
    let list = map.get(hash);
    list ? list.push(str) : map.set(hash, [str]);
  }
  return Array.from(map.values());
}
