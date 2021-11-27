function twoSum(nums: number[], target: number): number[] {
  let sortedNums = [];
  for (let i = 0; i < nums.length; i++) {
    sortedNums.push({ val: nums[i], index: i });
  }
  sortedNums.sort((a, b) => a.val - b.val);

  let i = 0;
  let j = sortedNums.length - 1;
  while (i < j) {
    let sum = sortedNums[i].val + sortedNums[j].val;
    if (sum === target) return [sortedNums[i].index, sortedNums[j].index];
    sum > target ? j-- : i++;
  }
  return [];
}
