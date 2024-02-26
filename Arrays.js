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
