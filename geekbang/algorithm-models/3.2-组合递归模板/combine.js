/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    var ans = []
    var s = []
    var findSubsets = function(index) {
        // 已经选了超过k个，
        // 或者把剩下的全选上也不够k个，退出
        if (s.length > k || s.length + n - index + 1 < k) return;
        if (index == n + 1) {
            ans.push(s.slice())
            return
        }
        findSubsets(index + 1)
        s.push(index)
        findSubsets(index + 1)
        s.pop()
    }
    findSubsets(1)
    return ans
};
