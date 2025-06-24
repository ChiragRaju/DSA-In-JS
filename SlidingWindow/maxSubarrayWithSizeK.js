// Returns the maximum sum of any subarray of size k
function maxSubarrayWithSizeK(arr, k) {
  let left = 0,
    right = 0,
    maxSubarray = 0,
    sum = 0;
  while (right < arr.length) {
    sum += arr[right];
    if (right - left + 1 < k) {
      right++;
    } else if (right - left + 1 === k) {
      maxSubarray = Math.max(maxSubarray, sum);
      sum -= arr[left];
      left++;
      right++;
    }
  }
  return maxSubarray;
}

// Example usage:
console.log(maxSubarrayWithSizeK([1, 2, 3, 4, 5], 3)); // Output: 12
