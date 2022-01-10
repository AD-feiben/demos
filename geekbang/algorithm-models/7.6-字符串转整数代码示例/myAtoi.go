package main

// Golang
func myAtoi(s string) int {
	// i----->
	index := 0
	// 1. while 丢弃前导空格
	for index < len(s) && s[index] == ' ' {
		index++
	}
	sign := 1
	for index < len(s) && (s[index] == '+' || s[index] == '-') {
		if s[index] == '-' {
			sign = -1
		}
		index++
	}
	// 3. while 处理数字
	val := 0
	// ASCII table
	// ASCII码 '0'-'9'是相连的
	for index < len(s) && (s[index] >= '0' && s[index] <= '9') {
		//    (a) if 数值范围
		// if (val * 10 + (s[index] - '0') > 2147483647) 移项
		if val > (2147483647-(int(s[index])-'0'))/10 {
			if sign == -1 {
				return -2147483648
			} else {
				return 2147483647
			}
		}
		val = val*10 + (int(s[index]) - '0')
		index++
	}
	// 4. 终止条件：遇到非数字停止
	// 已经体现在while循环中
	return val * sign
}
