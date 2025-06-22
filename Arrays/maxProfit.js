//best time to buy sell stocks

function maxProfit(prices) {
  debugger;
  let globalProfit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const currProfit = prices[j] - prices[i];
      if (currProfit > globalProfit) {
        globalProfit = currProfit;
      }
    }
  }
  return globalProfit;
}

console.log(maxProfit([7, 6, 4, 3, 1]));
