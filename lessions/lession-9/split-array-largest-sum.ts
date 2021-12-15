function splitArray(nums: number[], m: number): number {
  let left = 0,
    right = 0;
  for (let num of nums) {
    left = Math.max(left, num);
    right += num;
  }

  while (left < right) {
    let mid = (left + right) >> 1;
    if (validate(nums, m, mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return right;
}

function validate(nums: number[], m: number, size: number): boolean {
  let box = 0;
  let count = 1;

  for (let num of nums) {
    if (box + num <= size) {
      box += num;
    } else {
      count++;
      box = num;
    }
  }

  return count <= m;
}
