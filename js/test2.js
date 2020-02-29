// 重量排序
// 103 123 4444 99 2000
function orderByWeight(input = '103 123 4444 99 2000') {
    input = input.split(" ");

    // 计算重量后的新数组1
    let newInputArr = [];
    for(let i = 0; i < input.length; i++) {
        let tmpArr = String(input[i]).split("");
        let sums = tmpArr.reduce(function(totals, cur) {
            return Number(totals) + Number(cur);
        });
        newInputArr.push(Number(sums));
    }

    // 排序
    var compare = function (x, y) {
        return x - y;
    }
    let newTmpArr = JSON.parse(JSON.stringify(newInputArr)); // 深拷贝
    // let newTmpArr = Object.assign(newInputArr);
    let newSortArr = newTmpArr.sort(compare); // 排序后的新数组2

    // 返回结果
    let result = [];
    for(let i in newSortArr) {
        for(let j in newInputArr) {
            if (newSortArr[i] == newInputArr[j]) {
                result.push(input[j]);
            }
        }
    }

    console.log(result);
}
