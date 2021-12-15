function minEatingSpeed(piles: number[], h: number): number {
  let left = 1,
    right = 0;
  for (let pile of piles) {
    right += pile;
  }

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (validate(piles, h, mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return right;
}

function validate(piles: number[], h: number, k: number) {
  let costTime = 0;
  for (let pile of piles) {
    costTime += Math.ceil(pile / k);
  }
  return costTime <= h;
}
