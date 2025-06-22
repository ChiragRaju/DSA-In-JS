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
