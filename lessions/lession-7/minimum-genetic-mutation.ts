function minMutation(start: string, end: string, bank: string[]): number {
  let depth = new Map();
  depth.set(start, 0);

  let hashBank = new Set();
  for (let sep of bank) {
    hashBank.add(sep);
  }

  if (hashBank.has(end) === false) return -1;

  let gene = ["A", "C", "G", "T"];

  let queue = [start];
  while (queue.length > 0) {
    let s = queue.shift();
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 4; j++) {
        if (s.charAt(i) === gene[j]) continue;
        let nsArr = s.split("");
        nsArr[i] = gene[j];
        let ns = nsArr.join("");

        if (hashBank.has(ns) === false) continue;

        if (depth.has(ns)) continue;

        depth.set(ns, depth.get(s) + 1);
        queue.push(ns);
        if (ns === end) {
          return depth.get(ns);
        }
      }
    }
  }

  return -1;
}
