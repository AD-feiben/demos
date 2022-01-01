class Solution {
public:
    int findMaxValueOfEquation(vector<vector<int>>& points, int k) {
      deque<int> q;
      int ans = -1e9;
      for (int i = 0; i < points.size(); i++) {
        // x[j] >=1```` x[i] - k
        while (!q.empty() && points[q.front()][0] < points[i][0] - k) q.pop_front();
        if (!q.empty()) {
          ans = max(ans, points[i][1] + points[i][0] + points[q.front()][1] - points[q.front()][0]);
        }
        // y[j1] - x[j1] > y[j2] - x[j2];
        while (!q.empty() && points[q.back()][1] - points[q.back()][0] <= points[i][1] - points[i][0]) q.pop_back();
        q.push_back(i);
      }
      return ans;
    }
};