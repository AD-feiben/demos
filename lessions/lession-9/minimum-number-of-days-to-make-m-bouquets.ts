function minDays(bloomDay: number[], m: number, k: number): number {
  let latestBloom = 0;
  for (let bloom of bloomDay) {
    latestBloom = Math.max(latestBloom, bloom);
  }

  let left = 1,
    right = latestBloom + 1;

  while (left < right) {
    let mid = (left + right) >> 1;
    if (validate(bloomDay, m, k, mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  if (right === latestBloom + 1) return -1;
  return right;
}

function validate(bloomDay: number[], m: number, k: number, now: number) {
  let bouquet = 0;
  let consecutive = 0;

  for (let bloom of bloomDay) {
    if (bloom <= now) {
      consecutive++;
      if (consecutive === k) {
        consecutive = 0;
        bouquet++;
      }
    } else {
      consecutive = 0;
    }
  }

  return bouquet >= m;
}
