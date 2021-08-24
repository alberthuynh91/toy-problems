// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/

// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2
// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// Example 3
// Input: prices = [1, 2]
// Output: 1

// Example 4
// Input: prices = [10000, 9999, 9998, 9997, ..., 1]
// Output 0
// Explanation: There is never a cheaper price. The highest price is on day 1

var maxProfit = function(prices) {
    // Save the min price as the first price for day 1
    var minPrice = prices[0]
    var output = 0
    
    for (let i = 0; i < prices.length; i++) {
        const currentPrice = prices[i]
        // Keep price of the smallest price you find on every iteration
        minPrice = Math.min(minPrice, currentPrice)
        
        // If there is a profit, track the largest of profit between current and previously saved profit
        if (currentPrice - minPrice > 0) {
            output = Math.max(output, currentPrice - minPrice)
        }
    }
    return output
};
