const twoSum = (num, target) => {
  for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
      if (num[i] + num[j] === target) {
        return num[(i, j)];
      }
    }
  }
};
const res = twoSum([1, 2, 3], 5);
console.log(res);

//optimized

const twoSums = (num, target) => {
  obj = {};
  for (let i = 0; i < num.length; i++) {
    var n = num[i];
    if (obj[target - n] >= 0) {
      return obj[target - n], i;
    } else {
      obj[n] = i;
    }
  }
};
console.log(twoSums([2, 3, 1], 4));

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

//largets element in an array

function largestEle(num) {
  let largest = num[0];
  for (let i = 1; i < num.length; i++) {
    if (largest < num[i]) {
      largest = num[i];
    }
  }
  return largest;
}
console.log(largestEle([2, 3, 9, 8, 6]));

function secondLargest(num) {
  let largest = num[0];
  let secLargest = -1; //use -Infinity
  for (let i = 0; i < num.length; i++) {
    if (largest < num[i]) {
      secLargest = largest;
      largest = num[i];
    } else if (secLargest < num[i] && num[i] < largest) {
      secLargest = num[i];
    }
  }
  return secLargest;
}
console.log("second largest: ", secondLargest([2, 3, 9, 8, 6]));

//square of sorted array
//bruteforce approach

const sortedArray = (nums) => {
  let res = nums.map((x) => x * x);
  let sorted = res.sort((a, b) => a - b);
  return sorted;
};

console.log(sortedArray([-4, -1, 0, 3, 10]));

// using forEach

const sortArray = (n) => {
  let squares = [];
  n.forEach((x) => squares.push(x * x));
  let result = squares.sort((a, b) => a - b);
  return result;
};
console.log(sortArray([-4, -1, 0, 3, 10]));
