// 1-- 题目描述： 现有一个数字数组，其中数字表示某物品每天的价格。
// 请实现算法，计算在最多进行一次交易的情况下可以获取的最大利润。
//
// 示例： [7, 1, 5, 4, 2, 3, 6, 3]
// 结果： 1 - 5 = 4, 2 - 6 = 4      => 8
//  1 - 6 = 5


// [7, 3, 8 , 1]

let arr = [7, 3, 8 , 1];
// let arr = [7, 1, 5, 4, 2, 3, 6, 3];
function getMaxProfit(arr) {
    let profit = [];
    for(let i in arr) {
        for (let j in arr) {
            if (i == j) {
                continue;
            }
            profit.push(arr[i] - arr[j]);
        }
    }

    profit.sort((a, b) => a - b);
    console.log('最多进行一次交易的情况下可以获取的最大利润: ', profit, profit[0]);
}

getMaxProfit(arr);

// 2-- 题目描述： 现有一个数字数组，其中数字表示某物品每天的价格。
// 请实现算法，计算在最多进行2次交易的情况下可以获取的最大利润。
//
// 示例： [7, 1, 5, 4, 2, 3, 6, 3]
// 结果： 1 - 5 = 4, 2 - 6 = 4      => 8
//  1 - 6 = 5


// [7, 3, 8 , 1]
// let arr = [7, 3, 8 , 1];
let arr = [7, 1, 5, 4, 2, 3, 6, 3];
function getMaxProfit(arr) {
    // let profit = [];
    // for(let i in arr) {
    //     for (let j in arr) {
    //         if (i == j) {
    //             continue;
    //         }
    //         profit.push(arr[i] - arr[j]);
    //     }
    // }

    // profit.sort((a, b) => a - b);

    // // 找出数组中所有小于0的数，并取反，然后算出和的最大值
    // for(let i in profit) {
    //     if (profit[i] < 0) {
    //         profit[i] = -profit[i];
    //     } else {
    //         delete profit[i];
    //     }
    // }
    
    // console.log('最多进行2次交易的情况下可以获取的最大利润: ', profit, profit[0]);
}

getMaxProfit(arr);