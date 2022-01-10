// Javascript
function heapSort(arr) {
  if (arr.length === 0) return;
  let len = arr.length;


  // 建堆
  for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
    heapify(arr, len, i);
  }


  // 排序
  for (let i = len - 1; i >= 0; i--) {
    // 堆顶元素与最后一个互换
    [arr[0], arr[i]] = [arr[i], arr[0]];
    // 对 0 ～ i 的数组建堆
    heapify(arr, i, 0);
  }
}


function heapify(arr, len, i) {
  let left = i * 2 + 1;
  let right = i * 2 + 2;
  let largest = i;


  if (left < len && arr[left] > arr[largest]) {
    largest = left;
  }


  if (right < len && arr[right] > arr[largest]) {
    largest = right;
  }


  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, len, largest);
  }
}
