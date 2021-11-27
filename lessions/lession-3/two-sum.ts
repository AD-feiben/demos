function twoSum(nums: number[], target: number): number[] {
  let map: Map<number, number> = new Map();
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    const x = target - n;
    if (map.has(x)) {
      return [map.get(x), i];
    }
    map.set(n, i);
  }
  return [];
}
