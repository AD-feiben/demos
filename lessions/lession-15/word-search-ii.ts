class TrieNode {
  count: number;
  child: Map<string, TrieNode>;
  constructor() {
    this.count = 0;
    this.child = new Map();
  }
}

function findWords(board: string[][], words: string[]): string[] {
  const dx = [-1, 0, 0, 1];
  const dy = [0, -1, 1, 0];
  const root = new TrieNode();

  function insert(word: string) {
    let curr = root;
    for (let ch of word.split("")) {
      if (!curr.child.has(ch)) curr.child.set(ch, new TrieNode());
      curr = curr.child.get(ch);
    }
    curr.count++;
  }

  // 1. 建立Trie 插入 words
  for (let word of words) {
    insert(word);
  }

  // 2. 枚举每个起点 搜索
  let m = board.length;
  let n = board[0].length;
  let visit = new Array(m);
  let str: string[] = [];
  let ans: Set<string> = new Set();

  for (let i = 0; i < m; i++) visit[i] = new Array(n).fill(false);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      visit[i][j] = true;
      dfs(board, i, j, root);
      visit[i][j] = false;
    }
  }

  function dfs(board: string[][], x: number, y: number, curr: TrieNode) {
    if (curr === null) return;
    let ch = board[x][y];
    if (!curr.child.has(ch)) return;
    let next = curr.child.get(ch);
    str.push(ch);
    if (next.count > 0) ans.add(str.join(""));

    if (next.child.size === 0) {
      curr.child.delete(ch);
      str.pop();
      return;
    }

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= m || ny >= n) continue;
      if (visit[nx][ny]) continue;

      visit[nx][ny] = true;
      dfs(board, nx, ny, next);
      visit[nx][ny] = false;
    }

    str.pop();
  }

  return Array.from(ans);
}
