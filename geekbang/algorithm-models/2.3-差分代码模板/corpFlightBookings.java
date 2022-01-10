// Java
// LeetCode 1109 航班预订统计
class Solution {
    public int[] corpFlightBookings(int[][] bookings, int n) {
        int[] delta = new int[n + 2];  // 差分要开0~n+1
        Arrays.fill(delta, 0);
        for (int[] booking : bookings) {
            int fir = booking[0];
            int last = booking[1];
            int seats = booking[2];
            // 差分模板
            delta[fir] += seats;
            delta[last + 1] -= seats;
        }


        int[] a = new int[n + 1]; // 0~n
        a[0] = 0;
        // 1~n
        for (int i = 1; i <= n; i++) a[i] = a[i - 1] + delta[i];

        // 0~n-1
        int[] ans = new int[n];
        for (int i = 1; i <= n; i++) ans[i - 1] = a[i];
        return ans;
    }
}
