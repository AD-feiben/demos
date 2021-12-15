function mySqrt(x: number): number {
  let left = 0,
    right = x;
  while (left < right) {
    let mid = (left + right + 1) >> 1;
    if (mid <= x / mid) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }
  return right;
}

/** ------------------------------------------------ */

function mySqrt(x: number): number {
  return Math.trunc(myRealSqrt(x));
};

function myRealSqrt(x: number): number {
  let left = 0, right = x;
  while (left + 1e-7 < right) {
    let mid = (left + right) / 2;
    if (mid <= x / mid) {
      left = mid
    } else {
      right = mid;
    }
  }
  return right;
}