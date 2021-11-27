function findShortestSubArray(nums: number[]): number {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let count = 1;
    let left = i;
    let right = i;

    if (map.has(nums[i])) {
      let item = map.get(nums[i]);
      count = item.count + 1;
      left = item.left;
    }

    map.set(nums[i], {
      count,
      left,
      right
    });
  }

  let maxCount = 0;
  let minLen = 500000;
  map.forEach(({ count, left, right }) => {
    if (count > maxCount) {
      maxCount = count;
      minLen = right - left + 1;
    } else if (count === maxCount) {
      minLen = Math.min(minLen, right - left + 1);
    }
  })
  return minLen;
};