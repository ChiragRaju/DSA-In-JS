// Returns the length of the longest subarray with sum exactly k (for non-negative numbers)
function maxLenSubarraySumEqualsK_NonNegative(arr, k) {
  let left = 0,
    sum = 0,
    maxLen = 0;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];

    while (sum > k && left <= right) {
      sum -= arr[left++];
    }

    if (sum === k) {
      maxLen = Math.max(maxLen, right - left + 1);
    }
  }

  return maxLen;
}

// Example usage:
console.log(maxLenSubarraySumEqualsK_NonNegative([1, 2, 1, 1, 1], 3)); // Output: 3
