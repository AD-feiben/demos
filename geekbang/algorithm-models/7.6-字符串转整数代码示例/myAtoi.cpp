//C/C++
class Solution {
public:
    int myAtoi(string s) {
        // i----->
        int index = 0;
        // 1. while 丢弃前导空格
        while (index < s.length() && s[index] == ' ') index++;
        // 2. if 判断符号
        int sign = 1;
        if (index < s.length() && (s[index] == '+' || s[index] == '-')) {
            if (s[index] == '-') sign = -1;
            index++;
        }
        // 3. while 处理数字
        int val = 0;
        // ASCII table
        // ASCII码 '0'-'9'是相连的
        while (index < s.length() && (s[index] >= '0' && s[index] <= '9')) {
            //    (a) if 数值范围
            // if (val * 10 + (s[index] - '0') > 2147483647) 移项
            if (val > (2147483647 - (s[index] - '0')) / 10) {
                if (sign == -1) return -2147483648;
                else return 2147483647;
            }
            val = val * 10 + (s[index] - '0');
            index++;
        }
        // 4. 终止条件：遇到非数字停止
        // 已经体现在while循环中
        return val * sign;
    }
};
