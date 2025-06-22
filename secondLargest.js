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
