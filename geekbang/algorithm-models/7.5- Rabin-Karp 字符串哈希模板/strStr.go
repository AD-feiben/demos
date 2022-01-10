package main

// Golang
// LeetCode 28 实现strStr
func strStr(s, t string) int {
	if t == "" {
		return 0
	}
	n, m := len(s), len(t)
	s = " " + s
	t = " " + t

	p := int64(1e9 + 7) // 10^9+7 是一个质数
	var tHash int64 = 0
	for i := 1; i <= m; i++ {
		tHash = (tHash*131 + (int64(t[i]) - 'a' + 1)) % p
	}

	// 模板：预处理前缀Hash
	sHash := make([]int64, n+1)
	sHash[0] = 0
	p131 := make([]int64, n+1) // 131的次幂
	p131[0] = 1
	for i := 1; i <= n; i++ {
		sHash[i] = (sHash[i-1]*131 + (int64(s[i]) - 'a' + 1)) % p
		p131[i] = p131[i-1] * 131 % p
	}
	// hello
	// ll
	for i := m; i <= n; i++ { // 滑动窗结尾
		// s[i-m+1 ~ i] 与 t[1..m] 是否相等
		if calcHash(sHash, p131, p, i-m+1, i) == tHash &&
			s[i-m+1:i+1] == t[1:] {
			return i - m // 下标变回0开始
		}
	}
	return -1
}

// 模板：O(1)得到子串[l..r]的Hash值
func calcHash(H, p131 []int64, p int64, l, r int) int64 {
	// hello 的子串ll的hash值
	//  hell
	// -he00
	// =  ll
	return ((H[r]-H[l-1]*p131[r-l+1])%p + p) % p
}
