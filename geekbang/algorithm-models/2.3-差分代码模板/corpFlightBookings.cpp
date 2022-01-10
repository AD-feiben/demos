// C/C++
// LeetCode 1109 航班预订统计
class Solution {
public:
    vector<int> corpFlightBookings(vector<vector<int>>& bookings, int n) {
        vector<int> delta(n + 2, 0);  // 差分要开0~n+1
        for (auto& booking : bookings) {
            int fir = booking[0];
            int last = booking[1];
            int seats = booking[2];
            // 差分模板
            delta[fir] += seats;
            delta[last + 1] -= seats;
        }
        vector<int> a(n + 1, 0);  // 0~n


        // 1~n
        for (int i = 1; i <= n; i++) a[i] = a[i - 1] + delta[i];

        // 0~n-1
        for (int i = 1; i <= n; i++) a[i - 1] = a[i];
        a.pop_back();
        return a;
    }
};


// 任何对于区间的操作，可以转化为两个关键点（事件）
// 事件的影响从l开始，在r+1处消失
// 累加影响得到答案
// l +d    r+1   -d
   1  2  3  4  5
  10    -10
     20    -20
     25          (-25)
  10 45 -10 -20 0
  10 55 45  25 25
