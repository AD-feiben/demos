/** 解法一 */
function merge(intervals: number[][]): number[][] {
  intervals.sort((a: number[], b: number[]) => {
    return a[0] === b[0] ? a[1] - b[1] : a[0] - b[0];
  });

  let ans = [];
  let start = -1;
  let farthest = -1;
  for (let interval of intervals) {
    if (interval[0] <= farthest) {
      farthest = Math.max(farthest, interval[1]);
    } else {
      if (start !== -1) {
        ans.push([start, farthest]);
      }
      start = interval[0];
      farthest = interval[1];
    }
  }
  ans.push([start, farthest]);
  return ans;
}

/** 解法二 */
function merge(intervals: number[][]): number[][] {
  let events: number[][] = [];
  for (let interval of intervals) {
    events.push([interval[0], 1]);
    events.push([interval[1] + 1, -1]);
  }

  events.sort((a, b) => {
    return a[0] === b[0] ? a[1] - b[1] : a[0] - b[0];
  });

  let ans = [];
  let start = -1;
  let farthest = -1;
  let count = 0;
  for (let event of events) {
    if (count === 0) start = event[0];
    count += event[1];
    farthest = event[0];
    if (count === 0) {
      ans.push([start, farthest - 1]);
    }
  }

  return ans;
}
