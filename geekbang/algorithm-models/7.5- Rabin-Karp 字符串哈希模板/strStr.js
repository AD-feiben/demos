// JavaScript
// LeetCode 28 实现strStr
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var strStr = function(s, t) {


    if (t.length == 0) return 0;
    let n = s.length;
    let m = t.length;
    s = " " + s;
    t = " " + t;


    const p =  9999991; // 9999991 是一个质数，JavaScript整数没有long，模数不能开太大
    let tHash = 0;
    for (let i = 1; i <= m; i++)
        tHash = (tHash * 13331 + t.charCodeAt(i)) % p;
    // 模板：预处理前缀Hash
    let sHash = [];
    sHash[0] = 0;
    let p13331 = []; // 13331的次幂
    p13331[0] = 1;
    for (let i = 1; i <= n; i++) {
        sHash[i] = (sHash[i - 1] * 13331 + s.charCodeAt(i)) % p;
        p13331[i] = p13331[i - 1] * 13331 % p;
    }


    // 模板：O(1)得到子串[l..r]的Hash值
    var calcHash = function(l, r) {
        // hello 的子串ll的hash值
        //  hell
        // -he00
        // =  ll
        return ((sHash[r] - sHash[l - 1] * p13331[r - l + 1]) % p + p) % p;
    }

    for (let i = m; i <= n; i++) { // 滑动窗结尾
        // s[i-m+1 ~ i] 与 t[1..m] 是否相等
        if (calcHash(i - m + 1, i) == tHash &&
            s.substring(i - m + 1, i + 1) == t.substring(1)) {
            return i - m; // 下标变回0开始
        }
    }
    return -1;
};
