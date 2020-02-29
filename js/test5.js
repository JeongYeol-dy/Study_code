// --------------------------------------------------------
// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
var reverse = function (x) {
    let overflow = function (x) {
        return (x >= Math.pow(2, 31) - 1 || x <= -Math.pow(2, 31)) ? 0 : x
    }
    x = overflow(x)

    let isNegative = x < 0
    if (isNegative) {
        x = -x
    }
    let a = 0
    while (x > 9) {
        a = a * 10 + x % 10 * 10
        x = parseInt(x / 10)
    }
    a += x

    return isNegative ? overflow(-a) : overflow(a)
};