//January 27, 2026 121. Best Time to Buy and Sell Stocks

/* Instructions
Given an array of prices where prices[i] is the price of a given stock on the [ith] day
Maximize your profit by choosing a single day to buy one stock
AND choosing a day in the future to sell the stock
Return the maximum profit you can achieve from this transaction
IF you can not not achieve a profit return 0
*/

let prices = [2,1,2,1,0,1,2]

var maxProfit = function(prices) {
    let buyPointer = 0;
    let sellPointer = 1;
    let max_profit = 0;

    while (sellPointer < prices.length){
        if (prices[buyPointer] < prices[sellPointer]){
            let profit = prices[sellPointer] - prices[buyPointer];
            max_profit = Math.max(max_profit, profit);
        } else {
            buyPointer = sellPointer;
        }
        sellPointer++;
    }

    return max_profit
    
};

console.log(maxProfit(prices))



 