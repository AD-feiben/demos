function towSum(nums: number[], start: number, target: number): number[][] {
  let j = nums.length - 1;
  let ans = [];
  for (let i = start; i < nums.length; i++) {
    if (i > start && nums[i] === nums[i - 1]) continue;
    while (i < j && nums[i] + nums[j] > target) j--;
    if (i < j && nums[i] + nums[j] === target) {
      ans.push([nums[i], nums[j]]);
    }
  }
  return ans;
}

function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  let ans = [];

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let jks = towSum(nums, i + 1, -nums[i]);
    for (let jk of jks) {
      ans.push([nums[i], jk[0], jk[1]]);
    }
  }
  return ans;
}
