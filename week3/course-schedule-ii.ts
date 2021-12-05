function findOrder(numCourses: number, prerequisites: number[][]): number[] {
  let to: number[][] = new Array(numCourses);
  for (let i = 0; i < numCourses; i++) to[i] = [];

  let inDeg = new Array(numCourses).fill(0);
  for (let prerequisite of prerequisites) {
    let [ai, bi] = prerequisite;
    to[bi].push(ai);
    inDeg[ai]++;
  }

  let queue = [];
  for (let i = 0; i < numCourses; i++) {
    if (inDeg[i] === 0) {
      queue.push(i);
    }
  }
  let lessions = [];
  while (queue.length !== 0) {
    let x = queue.shift();
    lessions.push(x);
    for (let y of to[x]) {
      inDeg[y]--;
      if (inDeg[y] === 0) {
        queue.push(y);
      }
    }
  }

  return lessions.length === numCourses ? lessions : [];
}
