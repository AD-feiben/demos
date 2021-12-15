/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

function guessNumber(n: number): number {
  let left = 1,
    right = n;
  while (left < right) {
    let mid = left + ((right - left) >> 1);
    if (guess(mid) <= 0) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return right;
}
