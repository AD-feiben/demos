function robotSim(commands: number[], obstacles: number[][]): number {
  function calcHash(x: number, y: number): number {
    return (x + 30000) * 60001 + (y + 30000);
  }

  let obstaclesSet = new Set();
  for (let obstacle of obstacles) {
    const [x, y] = obstacle;
    obstaclesSet.add(calcHash(x, y));
  }

  function isObs(x: number, y: number) {
    const hash = calcHash(x, y);
    return obstaclesSet.has(hash);
  }

  let x = 0;
  let y = 0;
  let dir = 0; // N=0, E=1, S=2, W=3

  let dx = [0, 1, 0, -1];
  let dy = [1, 0, -1, 0];

  let ans = 0;

  for (let command of commands) {
    if (command === -1) {
      // 右转
      dir = (dir + 1) % 4;
      continue;
    } else if (command === -2) {
      // 左转
      dir = (dir + 3) % 4
      continue;
    }

    for (let i = 0; i < command; i++) {
      let mx = x + dx[dir];
      let my = y + dy[dir];
      if (isObs(mx, my)) break;
      x = mx;
      y = my;
      ans = Math.max(ans, x * x + y * y);
    }
  }
  return ans;
};