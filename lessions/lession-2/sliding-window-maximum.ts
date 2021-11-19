function maxSlidingWindow(nums: number[], k: number): number[] {
  let stack = [];
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    while (stack.length !== 0 && i - stack[0] > k - 1) {
      stack.shift();
    }

    while (stack.length !== 0 && nums[stack[stack.length - 1]] <= num) {
      stack.pop();
    }

    stack.push(i);

    if (i >= k - 1) {
      ans.push(nums[stack[0]]);
    }
  }
  return ans;
}
