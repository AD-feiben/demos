// JavaScript
// LeetCode 1109 航班预订统计
/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function(bookings, n) {
    var delta = new Array(n + 2).fill(0);  // 差分要开0~n+1
    for (const booking of bookings) {
        let fir = booking[0];
        let last = booking[1];
        let seats = booking[2];
        // 差分模板
        delta[fir] += seats;
        delta[last + 1] -= seats;
    }


    var a = new Array(n + 1).fill(0); // 0~n
    // 1~n
    for (let i = 1; i <= n; i++) a[i] = a[i - 1] + delta[i];
    // 0~n-1
    a.shift();
    return a;
};
