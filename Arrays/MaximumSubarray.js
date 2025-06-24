function maxSubarray(arr) {
  let maxSum = Infinity * -1;
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    maxSum = Math.max(maxSum, currentSum);
    if (currentSum < 0) {
      currentSum = 0;
    }
  }
  return maxSum;
}

console.log(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

//give me in ts
// function maxSubarray(arr: number[]): number {
//   let maxSum = Infinity * -1;
//   let currentSum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     currentSum += arr[i];
//     maxSum = Math.max(maxSum, currentSum);
//     if (currentSum < 0) {
//         currentSum=0;
//     }
//   }
//   return maxSum;
// }

// console.log(maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
