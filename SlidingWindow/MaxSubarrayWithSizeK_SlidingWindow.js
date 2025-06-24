// Returns the maximum sum of any subarray of size k using sliding window
function maxSubarrayWithSizeK_SlidingWindow(arr, k) {
  if (arr.length < k)
    throw new Error("Window size k is larger than the array length.");
  let maxSum = 0;
  let windowSum = 0;
  // Step 1: Sum of the first window
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  maxSum = windowSum;
  // Step 2: Slide the window
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i];
    windowSum -= arr[i - k];
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}

// Example usage:
try {
  console.log(maxSubarrayWithSizeK_SlidingWindow([1, 2, 3, 4, 5], 3)); // Output: 12
} catch (e) {
  console.error(e.message);
}
