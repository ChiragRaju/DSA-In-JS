function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let left = 0;
    const dict = new Map();

    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right];

        if (dict.has(currentChar) && dict.get(currentChar) >= left) {
            left = dict.get(currentChar) + 1;
        }

        dict.set(currentChar, right);

        const currentLength = right - left + 1;
        maxLength = Math.max(maxLength, currentLength);
    }

    return maxLength;
}
// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // Expected: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Expected: 1
console.log(lengthOfLongestSubstring("pwwkew")); // Expected: 3
console.log(lengthOfLongestSubstring("")); // Expected: 0
console.log(lengthOfLongestSubstring("a")); // Expected: 1
console.log(lengthOfLongestSubstring("au")); // Expected: 2
console.log(lengthOfLongestSubstring("dvdf")); // Expected: 3

