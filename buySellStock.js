//greedy algorithm
const buySellStock = (prices) => {
  let minimum = prices[0] || 0;
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i < minimum]) {
      minimum = prices[i];
    }
    profit = Math.max(profit, prices[i] - minimum);
  }
};
console.log(buySellStock([7, 6, 4, 3, 1]));

//explanation
// arr = [7,1,5,3,6,4];
// min=7=>1
// profit=0=>5-1=>4
