function corpFlightBookings(bookings: number[][], n: number): number[] {
  let delta = new Array(n + 2).fill(0);
  for (let booking of bookings) {
    let [first, last, seats] = booking;
    delta[first] += seats;
    delta[last + 1] -= seats;
  }
  let ans = new Array(n);
  // for (let i = 1; i <= n; i++) {
  //   ans[i] =  ans[i - 1] + delta[i];
  // }

  for (let i = 0; i < n; i++) {
    if (i === 0) {
      ans[i] = delta[i + 1];
    } else {
      ans[i] = ans[i - 1] + delta[i + 1];
    }
  }
  return ans;
}
