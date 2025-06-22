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
