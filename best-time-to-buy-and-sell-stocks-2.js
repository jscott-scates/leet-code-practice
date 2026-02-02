//February 2, 2026 #122. Best Time to Buy and Sell Stock II

/* Instructions
Given an integer array of prices where prices[i] is the price of a given stock on the ith day
You can only hold one share of the stock at any given time
Find and return the MAX profit you can achieve
*/

let prices = [7,1,5,3,6,4] //total profit = 7, buy on 1, sell on 5, buy on 3, sell on six

var maxProfit = function(prices){
    let profit = 0;

    for (let i=1; i < prices.length; i++){
        if(prices[i]>prices[i-1]){
            profit += prices[i] - prices[i-1]
        }
    }

    return profit
}

console.log(maxProfit(prices))