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
