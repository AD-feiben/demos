function shipWithinDays(weights: number[], days: number): number {
  let left = 0,
    right = 0;
  for (let weight of weights) {
    left = Math.max(left, weight);
    right += weight;
  }

  while (left < right) {
    let mid = (left + right) >> 1;
    if (validate(weights, days, mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return right;
}

function validate(weights: number[], days: number, load: number) {
  let needDays = 1;
  let loadWeight = 0;
  for (let weight of weights) {
    if (loadWeight + weight <= load) {
      loadWeight += weight;
    } else {
      loadWeight = weight;
      needDays++;
    }
  }
  return needDays <= days;
}
