package main

func strStr(haystack string, needle string) int {

	n, m := len(haystack), len(needle)
	if m == 0 {
		return 0
	}
	next := make([]int, m)
	for i, j := 1, 0; i < m; i++ {
		for j > 0 && needle[i] != needle[j] {
			j = next[j-1]
		}
		if needle[i] == needle[j] {
			j++
		}

		next[i] = j
	}
	for i, j := 0, 0; i < n; i++ {
		for j > 0 && needle[j] != haystack[i] {
			j = next[j-1]
		}
		if needle[j] == haystack[i] {
			j++
		}
		if j == m {
			return i - m + 1
		}

	}

	return -1
}
