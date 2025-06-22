//square of sorted array
//bruteforce approach

const sortedArray = (nums) => {
  let res = nums.map((x) => x * x);
  let sorted = res.sort((a, b) => a - b);
  return sorted;
};

console.log(sortedArray([-4, -1, 0, 3, 10]));
