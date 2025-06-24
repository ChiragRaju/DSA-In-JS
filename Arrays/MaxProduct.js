function maxProduct(nums) {
  if (nums.length === 0) return 0;

  let maxSoFar = nums[0];
  let currMax = nums[0];
  let currMin = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];

    if (num < 0) {
      // Swap currMax and currMin if num is negative
      [currMax, currMin] = [currMin, currMax];
    }

    currMax = Math.max(num, currMax * num);
    currMin = Math.min(num, currMin * num);

    maxSoFar = Math.max(maxSoFar, currMax);
  }

  return maxSoFar;
}

console.log(maxProduct([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
