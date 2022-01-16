function slidingPuzzle(board: number[][]): number {
  let start = zip(board);
  let target = zip([
    [1, 2, 3],
    [4, 5, 0],
  ]);

  let depth = new Map();
  let q = [];

  depth.set(start, 0);
  q.push(start);

  while (q.length > 0) {
    let s = q.shift();
    let pos = s.indexOf("0");
    // 0 1 2
    // 3 4 5
    if (pos >= 3) expand(s, pos, pos - 3);
    if (pos <= 2) expand(s, pos, pos + 3);
    if (pos % 3 !== 0) expand(s, pos, pos - 1);
    if (pos % 3 !== 2) expand(s, pos, pos + 1);
    if (depth.has(target)) return depth.get(target);
  }

  function expand(s, pos, other) {
    let nsArr = s.split("");
    [nsArr[pos], nsArr[other]] = [nsArr[other], nsArr[pos]];
    let ns = nsArr.join("");
    if (depth.has(ns)) return;
    depth.set(ns, depth.get(s) + 1);
    q.push(ns);
  }

  function zip(board: number[][]) {
    let s = "";
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 3; j++) {
        s += board[i][j] + "";
      }
    }
    return s;
  }
  return -1;
}
