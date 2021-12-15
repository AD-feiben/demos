function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  let arr2orders = new Map();
  for (let i = 0; i < arr2.length; i++) {
    arr2orders.set(arr2[i], i);
  }

  arr1.sort((x, y) => {
    let xPos = arr2orders.has(x) ? arr2orders.get(x) : arr2.length;
    let yPos = arr2orders.has(y) ? arr2orders.get(y) : arr2.length;
    if (xPos === yPos) return x - y;
    return xPos - yPos;
  });

  return arr1;
}

function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  let count = new Array(1001).fill(0);
  for (let val of arr1) {
    count[val]++;
  }

  let ans = [];
  for (let val of arr2) {
    while (count[val] > 0) {
      ans.push(val);
      count[val]--;
    }
  }

  for (let val in count) {
    while (count[val] > 0) {
      ans.push(val);
      count[val]--;
    }
  }

  return ans;
}
