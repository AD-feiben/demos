// JavaScript
// LeetCode 28 实现strStr
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
        if (needle.length == 0) return 0;
        const n = haystack.length;
        const m = needle.length;
        let next = [];
        for (let i = 0; i < m; i++) next[i] = -1; // 下标从0开始，初值-1；下标从1开始，初值0。
        for (let i = 1, j = -1; i < m; i++) {
            while (j >= 0 && needle[j + 1] != needle[i]) j = next[j];
            if (needle[j + 1] == needle[i]) j++;
            next[i] = j;
        }
        for (let i = 0, j = -1; i < n; i++) {
            while (j >= 0 && needle[j + 1] != haystack[i]) j = next[j];
            if (j + 1 < m && needle[j + 1] == haystack[i]) j++;
            if (j + 1 == m) return i - m + 1;
        }
        return -1;
};
