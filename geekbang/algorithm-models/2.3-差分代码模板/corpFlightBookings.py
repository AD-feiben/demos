# Python
# LeetCode 1109 航班预订统计
class Solution:
    def corpFlightBookings(self, bookings: List[List[int]], n: int) -> List[int]:
        delta = [0] * (n + 2);  # 差分要开0~n+1
        for booking in bookings:
            fir = booking[0]
            last = booking[1]
            seats = booking[2]
            # 差分模板
            delta[fir] += seats
            delta[last + 1] -= seats


        a = [0] * (n + 1)  # 0~n
        # 1~n
        for i in range(1, n + 1):
            a[i] = a[i - 1] + delta[i]
        # 0~n-1
        return a[1:]
